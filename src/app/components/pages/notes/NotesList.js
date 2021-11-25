import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { notesApi } from "../../../utils/notes.api";
import Preloader from "../../common/actions/Preloaders/Preloader";
import Button from "../../common/UI/Button/Button";
import Card from "../../common/UI/Card/Card";
import styles from "./NotesList.module.css";

const NotesList = (props) => {
	const tit = useRef();
	const desc = useRef();

	const [notes, setNotes] = useState([]);
	const [change, setChange] = useState(false);
	const [canEditTitle, setCanEditTitle] = useState({ id: "", canEdit: false });
	const [canEditDesc, setCanEditDesc] = useState({ id: "", canEdit: false });
	const [loading, setLoading] = useState(true);

	const deleteHandler = async (id) => {
		try {
			const res = await notesApi.deleteNote(id);
			console.log(res);
			if (res.data.isSuccess) {
				console.log(res.data.message);
				setChange((prev) => !prev);
				toast.success(res.data.message);
				setLoading(false);
			} else {
				console.log(res.data.message);
				toast.error(res.data.message);
				setLoading(false);
			}
		} catch (e) {
			console.log(e.message);
			toast.error(e.message);
			setLoading(false);
		}
	};

	const updateHandler = async (note, id) => {
		try {
			const res = await notesApi.updateNote(note, id);
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

	const onTitleFocus = (id) => {
		setCanEditTitle((prev) => ({
			id: id,
			canEdit: !prev.canEdit,
		}));
	};
	const onDescFocus = (id) => {
		setCanEditDesc((prev) => ({
			id: id,
			canEdit: !prev.canEdit,
		}));
	};

	const onTitleBlur = (id, description) => {
		setCanEditTitle((prev) => ({
			id: id,
			canEdit: !prev.canEdit,
		}));
		const title = tit.current.value;
		updateHandler({ title, description }, id);
	};
	const onDescBlur = (id, title) => {
		setCanEditDesc((prev) => ({
			id: id,
			canEdit: !prev.canEdit,
		}));
		const description = desc.current.value;
		updateHandler({ title, description }, id);
	};

	useEffect(() => {
		async function fetchData() {
			try {
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
				notesApi
					.getNotes()
					.then(async (response) => {
						const data = await response.data;

						console.log("rerg r gr", response);
						setLoading(false);
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
			} catch (e) {
				console.log("bc", e.message);
			}
		}
		fetchData();
	}, [change]);

	return (
		<>
			<Preloader customLoading={loading} />
			{notes.length > 0 ? (
				<ul className={styles["notes-list"]}>
					{notes.map((note, index) => (
						<Card key={index} className={styles["note-item"]}>
							<li>
								<Button
									onClick={() => deleteHandler(note._id)}
									className={styles["del-btn"]}
								>
									x
								</Button>
								<div className={styles.control}>
									{canEditTitle.id === note._id && canEditTitle.canEdit ? (
										<input
											size="60"
											type="text"
											defaultValue={note.title}
											ref={tit}
											autoFocus
											onBlur={() => onTitleBlur(note._id, note.description)}
										/>
									) : (
										<p
											style={{ fontWeight: "bold" }}
											onClick={() => onTitleFocus(note._id)}
										>
											{note.title}
										</p>
									)}
									{canEditDesc.id === note._id && canEditDesc.canEdit ? (
										<textarea
											cols="100"
											rows="8"
											autoFocus
											style={{ marginTop: "5px", display: "block" }}
											type="text"
											ref={desc}
											defaultValue={note.description}
											onBlur={() => onDescBlur(note._id, note.title)}
										/>
									) : (
										<p onClick={() => onDescFocus(note._id)}>
											{" "}
											{note.description}{" "}
										</p>
									)}
								</div>
							</li>
						</Card>
					))}
				</ul>
			) : (
				<p style={{ textAlign: "center" }}>No Notes Found! Try Adding One</p>
			)}
		</>
	);
};

export default NotesList;
