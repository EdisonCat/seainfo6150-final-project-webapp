import React from "react";
import CoverCard from "../CoverCard/CoverCard";
import styles from "./Home.module.css";
import home from "../../images/home.png";
import { Link } from "react-router-dom";

const Home = () => {
	const shows = [
		{
			title: "The Falcon and The Winter Soldier",
			thumbnail:
				"https://terrigen-cdn-dev.marvel.com/content/prod/1x/falcws_lob_crd_03.jpg",
			url: "https://www.youtube.com/embed/IWBsDaFWyTE",
		},
		{
			title: "Marvel Studios: Assembled",
			thumbnail:
				"https://terrigen-cdn-dev.marvel.com/content/prod/1x/assembled_lob_crd-01.jpg",
			url: "https://www.youtube.com/embed/cGdn6Fqv8j0",
		},
		{
			title: "Marvel's Behind the Mask",
			thumbnail:
				"https://terrigen-cdn-dev.marvel.com/content/prod/1x/behindthemask_lob_crd_02.jpg",
			url: "https://www.youtube.com/embed/ZZKzPblr1lc",
		},
		{
			title: "WandaVision",
			thumbnail:
				"https://terrigen-cdn-dev.marvel.com/content/prod/1x/wandavision_lob_crd_06.jpg",
			url: "https://www.youtube.com/embed/sj9J2ecsSpo",
		},
		{
			title: "Marvel Studios: Legends",
			thumbnail:
				"https://terrigen-cdn-dev.marvel.com/content/prod/1x/legends_lob_crd_01.jpg",
			url: "https://www.youtube.com/embed/lWQF6F81kbY",
		},
		{
			title: "Marvel's 616",
			thumbnail:
				"https://terrigen-cdn-dev.marvel.com/content/prod/1x/marvel616_lob_crd_02_1.jpg",
			url: "https://www.youtube.com/embed/1ODhWjCxydU",
		},
	];
	return (
		<div className={styles.container}>
			<h1>Age of Marvel TV shows</h1>
			<div className={styles.main}>
				<img src={home} alt="mainpic" />
			</div>
			<div className={styles.list}>
				{shows.map((show, idx) => (
					<CoverCard key={idx} show={show} />
				))}
			</div>
			<br />
			<h1>
				<Link to="/signup" className={styles.link}>
					Sign Up
				</Link>{" "}
				for More Information
			</h1>
		</div>
	);
};

export default Home;