import React from "react";
import useAuth from "../../hooks/useAuth";
import Typography from "@material-ui/core/Typography";

export default function Profile() {
	const { email } = useAuth();

	return (
		<div>
			<Typography component="h1">Profile</Typography>
			<Typography component="h2">
				User <strong>{email}</strong> is logged in
			</Typography>
		</div>
	);
}
