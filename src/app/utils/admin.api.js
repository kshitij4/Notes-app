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

		// axios.get("http://localhost:4000/users")
		// 	.then((res) => {
		// 		this.setState({ usersCollection: res.data });
		// 	})
		// 	.catch(function (error) {
		// 		console.log(error);
		// 	});
		return new Promise(async (resolve, reject) => {
			axios.get(`${environment.baseUrl}/notes/searchNote/${userId}`)
				.then((error, res) => {
					console.log(res);
					if (error) {
						reject({ success: false, data: error });
					} else {
						resolve(res && res.body ? res.body : {});
					}
				})
				.catch(function (error) {
					console.log(error);
				});
		});

		// return axios.get(`${environment.baseUrl}/notes/searchNote/${userId}`);
	},
	getProfile: () => {
		let userId = localStorage.getItem("userId");
		return axios.get(`${environment.baseUrl}/users/student/profile/${userId}`);
	},
	deleteNote: (noteId) => {
		let userId = localStorage.getItem("userId");
		return axios.delete(`${environment.baseUrl}/notes/userId/${userId}/deleteNote/${noteId}`);
	},
};
