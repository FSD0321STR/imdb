import React from "react";
import { Redirect, Route } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function Private({ children, ...props }) {
	const { logged } = useAuth();

	return <Route {...props}>{logged ? children : <Redirect to="/" />}</Route>;
}

export default Private;
