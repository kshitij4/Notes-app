import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL;

export const adminApi = {
	register: (userData) => {
		return axios.post(`${baseUrl}/users/student/register`, userData);
	},
	login: (userData) => {
		return axios.post(`${baseUrl}/users/student/login`, userData);
	},
	getProfile: () => {
		const authToken = localStorage.getItem("token");
		return axios.get(`${baseUrl}/users/student/profile`,
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