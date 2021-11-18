import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { notesApi } from "../../../utils/notes.api";
import Button from "../../common/UI/Button/Button";
import Card from "../../common/UI/Card/Card";
import styles from "./NotesList.module.css";

const NotesList = (props) => {
	const [notes, setNotes] = useState([]);
	const [change, setChange] = useState(false);

	const deleteHandler = async (id) => {
		try {
			const res = await notesApi.deleteNote(id);
			console.log(res);
			if (res.data.isSuccess) {
				console.log(res.data.message);
				setChange((prev) => !prev);
				toast.success(res.data.message);
			} else {
				console.log(res.data.message);
				toast.error(res.data.message);
			}
		} catch (e) {
			console.log(e.message);
			toast.error(e.message);
		}
	};

	useEffect(() => {
		async function fetchData() {
			try {

				// notesApi.getNotes()
				// 	.then((res) => {
				// 		if (res.IsSuccess) {
				// 			console.log("inside if condition", res);
				// 		} else {
				// 			console.log("inside else condition");
				// 			// this.setState({ isSpinnerLoading: false });
				// 		}
				// 	})
				// 	.catch((err) => {
				// 		console.log("err::", err);
				// 		// this.setState({ isSpinnerLoading: false });
				// 	});

				// fetch(`${environment.baseUrl}/notes/searchNote/${userId}`)
				// 	.then(async (response) => {
				// 		const data = await response.json();
				// 		if (data.isSuccess) {
				// 			setNotes(data.Data);
				// 		} else {
				// 			console.log("inside else condition", data);
				// 			setNotes(data.Data);
				// 		}
				// 		if (!response.ok) {
				// 			const error = (data && data.message) || response.statusText;
				// 			return Promise.reject(error);
				// 		}

				// 		console.log("check status", data);
				// 	})
				// 	.catch((error) => {
				// 		console.log("inside catch", error);
				// 	});

				notesApi.getNotes()
					.then(async (response) => {
						const data = await response.data;

						console.log("rerg r gr", response);

						if (data.isSuccess) {
							setNotes(data.Data);
						} else {
							console.log("inside else condition", data);
							setNotes(data.Data);
						}
					})
					.catch((error) => {
						console.log("inside catch", error);
					});

				// const res = await notesApi.getNotes();
				// console.log(res);
				// if (res.data.isSuccess) {
				// 	setNotes(res.data.Data);
				// } else {
				// 	console.log(res.data.message);
				// }
			} catch (e) {
				console.log("bc", e.message);
			}
		}
		fetchData();
	}, [change]);

	return notes.length > 0 ? (
		<ul className={styles["notes-list"]}>
			{notes.map((note) => (
				<Card key={note._id} className={styles["note-item"]}>
					<li>
						<Button onClick={() => deleteHandler(note._id)} className={styles["del-btn"]}>
							x
						</Button>
						<b>{note.title}</b> <p>{note.description}</p>
					</li>
				</Card>
			))}
		</ul>
	) : (
		<p style={{ textAlign: "center" }}>No Notes Found! Try Adding One</p>
	);
};

export default NotesList;
