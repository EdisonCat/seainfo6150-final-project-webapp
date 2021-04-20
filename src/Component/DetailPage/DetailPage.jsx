import React, { useEffect, useState } from "react";
import styles from "./DetailPage.module.css";
import { useParams, useHistory } from "react-router-dom";

export default function DetailPage() {
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [thumbnail, setThumbnail] = useState("");
	const [comics, setComics] = useState([]);
	const { id } = useParams();
	const history = useHistory();
	useEffect(() => {
		const fetchData = async (id) => {
			const url = `${process.env.REACT_APP_MARVEL_CHARACTERS_URL}${id}${process.env.REACT_APP_MARVEL_API_HASH}`;
			const res = await fetch(url, {
				method: "GET",
				headers: { "Content-Type": "application/json" },
			});
			const json = await res.json();
			if (!json.data) {
				history.push({ pathname: "/notfound" });
				return;
			}
			const character = json.data.results[0];
			setName(character.name);
			setDescription(character.description);
			setComics(character.comics.items);
			setThumbnail(
				`${character.thumbnail.path}.${character.thumbnail.extension}`
			);
		};
		fetchData(id);
	}, [id, history]);
	const handleComics = (idx) => {
		const arr = comics[idx].resourceURI.split("/");
		const comicsId = arr[arr.length - 1];
		history.push({
			pathname: `/comics/${comicsId}`,
			state: { url: comics[idx].resourceURI },
		});
	};

	return (
		<div className={styles.container}>
			<div className={styles.thumbnail}>
				<img alt="thumbnail" src={thumbnail} />
			</div>
			<div className={styles.info}>
				<div>
					<h1>{name}</h1>
					<br />
					<h4>Description: {description}</h4>
				</div>
				<h4>Comics: </h4>
				<div className={styles.comics}>
					{comics.map((comic, idx) => (
						<div
							className={styles.link}
							key={idx}
							onClick={() => handleComics(idx)}
						>
							{comic.name}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}