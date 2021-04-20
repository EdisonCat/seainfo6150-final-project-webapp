import React, { useState, useEffect } from "react";
import styles from "../DetailPage/DetailPage.module.css";
import { useParams, useHistory } from "react-router-dom";
export default function ComicsDetail() {
	const { id } = useParams();
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [thumbnail, setThumbnail] = useState("");
	const [characters, setCharacters] = useState([]);
	const history = useHistory();
	useEffect(() => {
		const fetchData = async () => {
			const url = `${process.env.REACT_APP_MARVEL_COMICS_URL}${id}${process.env.REACT_APP_MARVEL_API_HASH}`;
			const res = await fetch(url, {
				method: "GET",
				headers: { "Content-Type": "application/json" },
			});
			const json = await res.json();
			setCharacters(json.data.results[0].characters.items);
			setDescription(json.data.results[0].description);
			setThumbnail(
				json.data.results[0].thumbnail.path +
					"." +
					json.data.results[0].thumbnail.extension
			);
			setTitle(json.data.results[0].title);
		};
		fetchData();
	}, [id]);
	const handleCharacter = (idx) => {
		const arr = characters[idx].resourceURI.split("/");
		const characterId = arr[arr.length - 1];
		history.push({ pathname: `/characters/${characterId}` });
	};

	return (
		<div className={styles.container}>
			<div className={styles.thumbnail}>
				<img src={thumbnail} alt="thumbnail" />
			</div>
			<div className={styles.info}>
				<h1>{title}</h1>
				<h4>Description: {description}</h4>
				<h4>Characters: </h4>
				<div className={styles.comics}>
					{characters.map((character, idx) => (
						<div
							className={styles.link}
							onClick={() => handleCharacter(idx)}
							key={idx}
						>
							{character.name}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}