import React, { useReducer, createContext } from "react";
import api from "../utils/auth-api";

export const AuthContext = createContext(null);

const token = localStorage.getItem("token");

const initialState = {
	user: JSON.parse(localStorage.getItem("user")),
	logged: token !== null,
};

const reducer = (state, action) => {
	switch (action.type) {
		case "login":
			return {
				...state,
				logged: true,
				user: action.user,
			};
		case "logout":
			return {
				...state,
				logged: false,
				user: null,
			};
		case "register":
			return {
				...state,
				logged: true,
				user: action.user,
			};
	}
};

function AuthProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, initialState);

	const register = async ({ email, password, fname, lname }) => {
		return await api
			.register({ email, password, fname, lname })
			.then((token) => {
				if (token.token !== undefined) {
					localStorage.setItem("token", token.token);
					localStorage.setItem("user", JSON.stringify(token.user));
					dispatch({ type: "register", user: token.user });
					return token.token;
				} else {
					dispatch({ type: "logout", token: token });
					return alert("Error");
				}
			})
			.catch((e) => {
				dispatch({ type: "logout" });
				Promise.reject(e);
			});
	};

	const login = async ({ email, password }) => {
		return await api
			.login({ email, password })
			.then((token) => {
				console.log(token);
				if (token.token !== undefined) {
					localStorage.setItem("token", token.token);
					localStorage.setItem("user", JSON.stringify(token.user));
					dispatch({ type: "login", user: token.user });
					return token.token;
				} else {
					dispatch({ type: "logout", token: token });
					return alert("Error");
				}
			})
			.catch((e) => {
				dispatch({ type: "logout" });
				Promise.reject(e);
			});
	};

	const logout = () => {
		dispatch({ type: "logout" });
		localStorage.removeItem("token");
		localStorage.removeItem("user");
	};

	return (
		<AuthContext.Provider value={{ ...state, token, login, logout, register }}>
			{children}
		</AuthContext.Provider>
	);
}

export default AuthProvider;
