import { environment } from "../environments/environment";
import axios from "axios";

const authToken = localStorage.getItem("token");

export const notesApi = {
	createNote: (note) => {
		return axios.post(`${environment.baseUrl}/notes/createnote`, note, 
		{headers: { authorization: `Bearer ${authToken}`}});
	},
	getNotes: () => {
		return axios.get(`${environment.baseUrl}/notes/searchNote`,
		{headers: { authorization: `Bearer ${authToken}`}});
	},
	deleteNote: (noteId) => {
		return axios.delete(`${environment.baseUrl}/notes/deleteNote/${noteId}`,
		{headers: { authorization: `Bearer ${authToken}`}});
	},
};
