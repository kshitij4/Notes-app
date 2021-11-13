import { useEffect, useState } from "react";
import { api } from "../../../utils/admin.api";
import Card from "../../common/UI/Card/Card";
import styles from "./NotesList.module.css";

const NotesList = (props) => {
	const [notes, setNotes] = useState([]);

	useEffect(() => {
		async function fetchData() {
			try {
				const res = await api.getNotes();
				console.log(res);
				if (res.data.isSuccess) {
					setNotes(res.data.Data);
				} else {
					console.log("no success", res);
				}
			} catch (e) {
				console.log(e.message);
			}
		}
		fetchData();
	}, []);

	return notes.length > 0 ? (
		<ul className={styles["notes-list"]}>
			{notes.map((note) => (
				<Card key={note._id} className={styles["note-item"]}>
					<li>
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
