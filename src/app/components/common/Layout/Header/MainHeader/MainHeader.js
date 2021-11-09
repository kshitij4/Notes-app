import React from "react";

import Navigation from "../Navigation/Navigation";
import classes from "./MainHeader.module.css";

const MainHeader = (props) => {
	return (
		<header className={classes["main-header"]}>
			<img src="https://cdn.mastersunion.org/assets/img/logo.svg" alt="Masters's union logo" 
      height="60%"></img>

			<Navigation isLoggedIn={props.isAuthenticated} onLogout={props.onLogout} />
		</header>
	);
};

export default MainHeader;
