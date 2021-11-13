import { environment } from "../environments/environment";
import axios from "axios";

export const api = {
	register: (userData) => {
		return axios.post(`${environment.baseUrl}/users/student/register`, userData);
	},
	login: (userData) => {
		return axios.post(`${environment.baseUrl}/users/student/login`, userData);
	},
	createNote: (note) => {
		return axios.post(`${environment.baseUrl}/notes/createnote`, note);
	},
	getNotes: () => {
		let userId = localStorage.getItem("userId");
		return axios.get(`${environment.baseUrl}/notes/searchNote/${userId}`);
	},
	getProfile: () => {
		let userId = localStorage.getItem("userId");
		return axios.get(`${environment.baseUrl}/users/student/profile/${userId}`);
	},
};
