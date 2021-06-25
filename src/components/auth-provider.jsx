import React, { createContext, useState } from "react";
import { login } from "../utils/auth-api";

export const AuthContext = createContext(null);

function AuthProvider({ children }) {
	const [email, setEmail] = useState("");
	const [logged, setLogged] = useState(false);

	const login = async ({ email, password }) => {
		const log = await login({ email, password });
		if (log.status === 200) {
			setEmail(email);
			setLogged(true);
		}
	};

	const logout = () => {
		setEmail("");
		setLogged(false);
	};

	return (
		<AuthContext.Provider value={{ email, login, logout, logged }}>
			{children}
		</AuthContext.Provider>
	);
}

export default AuthProvider;
