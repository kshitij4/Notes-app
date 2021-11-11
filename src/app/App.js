import React, { useEffect, useState } from "react";
import { api, checkVerified } from "./utils/admin.api";
// import {environment} from './environments/environment';
// import axios  from 'axios';

import Login from "./components/login/Login";
import Home from "./components/home/Home";
import MainHeader from "./components/common/Layout/Header/MainHeader/MainHeader";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/register/Register";
import Profile from "./components/profile/Profile";
import NotesList from "./components/notes/NotesList";

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [notes, setNotes] = useState([]);

	const notesHandler = (title, description) => {
		setNotes((prev) => {
			const updatedNotes = [...prev];
			updatedNotes.unshift({ title, description, id: Math.random().toString() });
			return updatedNotes;
		});
	};

	useEffect(() => {
		if (localStorage.getItem("isLogged") === "1") {
			setIsLoggedIn(true);
		}
	}, []);

	const loginHandler = async (email, password) => {
		const res = await api.login({ email, password });
		console.log(res);
		if(res.data.isSuccess){
			setIsLoggedIn(true);
			localStorage.setItem("isLogged", 1);
		}else{
			console.log(res.data.message);
		}
		// const res = await AdminApi.login({email,password});
		// console.log("logged in", res);
		// if(res && res.data.isSuccess){
		// 	setIsLoggedIn(true);
		// 	localStorage.setItem("isLogged", 1);
		// }
	};

	const registerHandler = async (userData) => {
		// const res = AdminApi.register(userData);
		// console.log(res);
	};

	const logoutHandler = () => {
		localStorage.removeItem("isLogged");
		setIsLoggedIn(false);
	};

	return (
		<Router>
			<MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
			<main>
				<Routes>
					<Route path="/register" element={<Register onRegister={registerHandler} />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/notes" element={<NotesList notes={notes} />} />
					<Route path="/" element={isLoggedIn ? <Home onAddNote={notesHandler} /> : <Login onLogin={loginHandler} />} exact />
				</Routes>
			</main>
		</Router>
	);
}

export default App;
