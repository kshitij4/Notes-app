import { environment } from "../environments/environment";
import axios from "axios";

export const notesApi = {
	createNote: (note) => {
		const authToken = localStorage.getItem("token");
		return axios.post(`${environment.baseUrl}/notes/createnote`, note, 
		{headers: { authorization: `Bearer ${authToken}`}});
	},
	getNotes: () => {
		const authToken = localStorage.getItem("token");
		return axios.get(`${environment.baseUrl}/notes/searchNote`,
		{headers: { authorization: `Bearer ${authToken}`}});
	},
	deleteNote: (noteId) => {
		const authToken = localStorage.getItem("token");
		return axios.delete(`${environment.baseUrl}/notes/deleteNote/${noteId}`,
		{headers: { authorization: `Bearer ${authToken}`}});
	},
	updateNote: (note,noteId) => {
		const authToken = localStorage.getItem("token");
		return axios.post(`${environment.baseUrl}/notes/updateNote/${noteId}`,note,
		{headers: { authorization: `Bearer ${authToken}`}});
	}
};
