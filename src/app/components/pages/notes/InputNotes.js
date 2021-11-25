import { useRef } from "react";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useState } from "react/cjs/react.development";
import Button from "../../common/UI/Button/Button";
import Card from "../../common/UI/Card/Card";
import classes from "./InputNotes.module.css";

const InputNotes = (props) => {
	const title = useRef();
	const description = useRef();
	const [isValidTitle, setIsValidTitle] = useState(true);
	const [isValidDesc, setIsValidDesc] = useState(true);

	const submitHandler = (event) => {
		event.preventDefault();
		if (title.current.value === "") {
			setIsValidTitle(false);
		}
		if (description.current.value === "") {
			setIsValidDesc(false);
		}
		if (title.current.value === "" || description.current.value === "") {
			toast.warn("Fill the required Fields");
			return;
		}
		props.onAddNote(title.current.value, description.current.value);
		title.current.value = "";
		description.current.value = "";
	};

	const titleHandler = (event) => {
		event.preventDefault();
		if (event.target.value === "") {
			setIsValidTitle(false);
		}else{
			setIsValidTitle(true);
		}
	};

	const descHandler = (event) => {
		event.preventDefault();
		if (event.target.value === "") {
			setIsValidDesc(false);
		}else{
			setIsValidDesc(true);
		}
	};

	return (
		<Card className={classes.notes}>
			<form onSubmit={submitHandler}>
				<div
					className={`${classes.control} ${
						!isValidTitle ? classes.invalid : ""
					}`}
				>
					<label htmlFor="title">Title</label>
					<input
						type="text"
						id="title"
						ref={title}
						onChange={titleHandler}
						onBlur={titleHandler}
					/>
				</div>
				<div
					className={`${classes.control} ${
						!isValidDesc ? classes.invalid : ""
					}`}
				>
					<label htmlFor="description">Description</label>
					<textarea
						rows="10"
						type="text"
						id="description"
						ref={description}
						onChange={descHandler}
						onBlur={descHandler}
					/>
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
