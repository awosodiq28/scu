import React, { useContext } from "react";
import AuthContext from "../AuthContext";

const Example = () => {
	const { user, checkUserLoggedIn }: any = useContext(AuthContext);

	return (
		<div>
			{if (user?.verified) {
				<p className="tac">
					Your documents have been submitted for Verification. <br />{" "}
					Your Verification might take a while. Please be patient.
					Thank you
				</p>
			} else 
				{<p>Render this instead</p>}
			}
		</div>
	);
};

export default Example;
