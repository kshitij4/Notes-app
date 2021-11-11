import Card from "../common/UI/Card/Card";
import styles from "./NotesList.module.css";

const NotesList = (props) => {
	return (
		props.notes.length > 0 ? (<ul className={styles["notes-list"]}>
			{props.notes.map((note) => (
                <Card key = {note.id} className = {styles['note-item']}>
					<li><b>{note.title}</b>  <p>{note.description}</p></li>
                </Card>
			))}
		</ul>):
		(<p style={{ textAlign: 'center' }}>No Notes Found! Try Adding One</p>)
	);
};

export default NotesList;
