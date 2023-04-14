import React, { useContext } from "react";
import AuthContext from "../AuthContext";

const Example = () => {
	const { user, checkUserLoggedIn }: any = useContext(AuthContext);

	return (
		<>
			<div>
				{user?.role == "Manager" ? (
					<p>You ara a manager</p>
				) : (
					<p>Render this instead</p>
				)}
			</div>

			<div>
				{user?.role == "Manager" && <p>Only Managers Can view this</p>}
			</div>
		</>
	);
};

export default Example;
