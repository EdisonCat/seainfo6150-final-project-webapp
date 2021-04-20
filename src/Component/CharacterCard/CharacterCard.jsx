import React from "react";
import styles from "./CharacterCard.module.css";
import { useHistory } from "react-router-dom";
export default function CharacterCard(props) {
	const history = useHistory();
	const handleClick = () => {
		history.push({ pathname: "/characters/" + props.data.id });
	};
	return (
		<div className={styles.container}>
			<div>
				<h1>{props.data.name}</h1>
			</div>
			<img
				className={styles.thumbnail}
				src={props.data.thumbnail.path + ".jpg"}
				alt="thumbnail"
			/>
			<button onClick={() => handleClick()}>More Info</button>
		</div>
	);
}
