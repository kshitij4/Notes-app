import React, { useEffect, useState } from "react";

import Login from "./components/login/Login";
import Home from "./components/home/Home";
import MainHeader from "./components/common/Layout/Header/MainHeader/MainHeader";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/register/Register";
import Profile from "./components/profile/Profile";

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		if (localStorage.getItem("isLogged") === "1") {
			setIsLoggedIn(true);
		}
	}, []);

	const loginHandler = (email, password) => {
		localStorage.setItem("isLogged", 1);
		setIsLoggedIn(true);
	};

	const registerHandler = (userData) => {
		console.log(userData);
	}

	const logoutHandler = () => {
		localStorage.removeItem("isLogged");
		setIsLoggedIn(false);
	};

	return (
		<Router>
			<MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
			<main>
				<Routes>
					<Route path="/register" element={<Register onRegister = {registerHandler} />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/" element={isLoggedIn ? <Home onLogout={logoutHandler} /> : <Login onLogin={loginHandler} />} exact />
				</Routes>
			</main>
		</Router>
	);
}

export default App;
