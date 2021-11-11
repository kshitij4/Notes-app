import { environment } from "../environments/environment";
import axios from "axios";

export const api = {
	register: async (userData) => {
		try {
			const req = await axios.post(`${environment.baseUrl}/users/student/register`, userData);
			return req;
		} catch (error) {
			console.log(error);
			return null;
		}
	},
	login: async (userData) => {
		try {
			const req = await axios.post(`${environment.baseUrl}/users/student/login`, userData);
			return req;
		} catch (error) {
			console.log(error);
			return null;
		}
	},
};

export const checkVerified = (userData) => {
	// async function(data){
	axios.post(`${environment.baseUrl}/users/student/login`, userData)
		.then((response) => {
			// return response.data.message;
         console.log(response);
         return  response;
		})
		.catch((err) => {
			console.log(err);
         return null;
		});
	//  }/

	// return new Promise((resolve, reject) => {
	// 	axios.post(`${environment.baseUrl}/users/student/login`, userData)
	// 		.then((res) => {
	// 			console.log("fefefe", res);
	// 		})
	// 		.catch((err) => console.log("ffefefefefefe", err));
	// });
};

// export default api;
