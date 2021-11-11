import { useRef } from "react";
import Button from "../common/UI/Button/Button";
import Card from "../common/UI/Card/Card";
import classes from "./InputNotes.module.css";

const InputNotes = (props) => {
	const title = useRef();
	const description = useRef();

	const submitHandler = (event) => {
		event.preventDefault();
        props.onAddNote(title.current.value, description.current.value);
        title.current.value = '';
        description.current.value = '';
	};

	return (
		<Card className={classes.notes}>
			<form onSubmit={submitHandler}>
				<div className={classes.control}>
					<label htmlFor="title">Title</label>
					<input type="text" id="title" ref={title} />
				</div>
				<div className={classes.control}>
					<label htmlFor="description">Description</label>
					<textarea rows= '10' type="text" id="description" ref={description} />
				</div>
				<div className={classes.actions}>
					<Button type="submit" className={classes.btn}>
						Add Note
					</Button>
				</div>
			</form>
		</Card>
	);
};

export default InputNotes;
