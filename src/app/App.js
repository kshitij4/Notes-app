import React, { useEffect, useState } from "react";
import { api } from "./utils/admin.api";

import Login from "./components/pages/login/Login";
import Home from "./components/pages/home/Home";
import MainHeader from "./components/common/Layout/Header/MainHeader/MainHeader";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Register from "./components/pages/register/Register";
import Profile from "./components/pages/profile/Profile";
import NotesList from "./components/pages/notes/NotesList";

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const notesHandler = async (title, description) => {
		try {
			const res = await api.createNote({ userId: localStorage.getItem("userId"), title, description });
			console.log(res);
			if (res.data.isSuccess) {
				console.log(res.data.message);
			} else {
				console.log("Something went wrong");
				console.log(res.data.message);
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		if (localStorage.getItem("userId")) {
			setIsLoggedIn(true);
		}
	}, []);

	const loginHandler = async (email, password) => {
		try {
			const res = await api.login({ email, password });
			console.log(res);
			if (res.data.isSuccess) {
				setIsLoggedIn(true);
				console.log(res);
				localStorage.setItem("userId", res.data.userId);
			} else {
				console.log(res.data.message);
			}
		} catch (error) {
			console.log(error);
		}
	};

	const registerHandler = async (userData) => {
		try {
			const res = await api.register(userData);
			console.log(res);
		} catch (error) {
			console.log(error);
		}
	};

	const logoutHandler = () => {
		localStorage.removeItem("userId");
		setIsLoggedIn(false);
	};

	return (
		<Router>
			<MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
			<main>
				<Routes>
					<Route path="/register" element={!isLoggedIn ? <Register onRegister={registerHandler} /> : <Navigate to="/" />} />
					<Route path="/profile" element={isLoggedIn ? <Profile /> : <Navigate to="/" />} />
					<Route path="/notes" element={isLoggedIn ? <NotesList /> : <Navigate to="/" />} />
					<Route path="/" element={isLoggedIn ? <Home onAddNote={notesHandler} /> : <Login onLogin={loginHandler} />} exact />
				</Routes>
			</main>
		</Router>
	);
}

export default App;
