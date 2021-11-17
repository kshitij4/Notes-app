import { environment } from "../environments/environment";
import axios from "axios";

const authToken = localStorage.getItem("token");

export const adminApi = {
	register: (userData) => {
		return axios.post(`${environment.baseUrl}/users/student/register`, userData);
	},
	login: (userData) => {
		return axios.post(`${environment.baseUrl}/users/student/login`, userData);
	},
	getProfile: () => {
		return axios.get(`${environment.baseUrl}/users/student/profile`,
		{headers: { authorization: `Bearer ${authToken}`}});
	},
};


// export const adminApi = {
// 	register: (userData) => {
// 		return fetch(`${environment.baseUrl}/users/student/register`, 
// 		{method: 'Post',body: userData});
// 	},
// 	login: (userData) => {
// 		return fetch(`${environment.baseUrl}/users/student/login`, 
// 		{method: 'Post',body: userData});
// 	},
// 	getProfile: () => {
// 		let userId = localStorage.getItem("userId");
// 		return fetch(`${environment.baseUrl}/users/student/profile/${userId}`,
// 		{method: 'GET',headers: { authorization: `Bearer ${authToken}`}});
// 	},
// };