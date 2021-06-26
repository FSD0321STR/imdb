import React, { createContext, useState } from "react";
import { login as userLogin } from "../utils/auth-api";

export const AuthContext = createContext(null);

function AuthProvider({ children }) {
	const [userId, setUserId] = useState("");
	const [email, setEmail] = useState("");
	const [logged, setLogged] = useState(false);

	const login = async ({ email, password }) => {
		const log = await userLogin({ email, password });
		if (log.status === 200) {
			setUserId(log.data.user.id);
			setEmail(email);
			setLogged(true);
			localStorage.setItem("token", log.data.token);
			return true;
		}
	};

	const logout = () => {
		setUserId("");
		setEmail("");
		setLogged(false);
	};

	return (
		<AuthContext.Provider value={{ email, userId, login, logout, logged }}>
			{children}
		</AuthContext.Provider>
	);
}

export default AuthProvider;
