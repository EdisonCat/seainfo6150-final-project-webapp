import React, { useState, useContext } from "react";
import styles from "./Header.module.css";
import { Link, useHistory } from "react-router-dom";
import logo from "../../images/logo.png";
import MarvelFandomContext from "../../Context/MarvelFandomContext";
export default function Header(props) {
	const [keyword, setKeyword] = useState("");
	const history = useHistory();
	const context = useContext(MarvelFandomContext);
	const handleHome = (e) => {
		e.preventDefault();
		history.push({ pathname: "/" });
	};
	const handleSearch = () => {
		history.push({ pathname: `/characters/${keyword}` });
	};
	return (
		<div className={styles.container}>
			<div className={styles.upper}>
				{props.loggedIn ? (
					<label className={styles.greeting}>
						Hello, {props.username}
					</label>
				) : (
					<label className={styles.greeting}>
						The best Marvel Fandom in the world
					</label>
				)}
				<img
					className={styles.logo}
					src={logo}
					alt="logo"
					onClick={(e) => handleHome(e)}
				/>
				<div className={styles.search}>
					<form>
						<input
							type="text"
							placeholder="Type the id of the character"
							value={keyword}
							onChange={(e) => setKeyword(e.target.value)}
						/>
						<button onClick={(e) => handleSearch(e)}>Search</button>
					</form>
				</div>
			</div>
			<div className={styles.menu}>
				<img
					className={styles.menubutton}
					src="https://img.icons8.com/cotton/64/000000/menu.png"
					alt="menu"
					width="32"
					style={props.sidebar ? { transform: "rotate(90deg)" } : {}}
					onClick={() => props.setSidebar(!props.sidebar)}
				/>
				<Link to="/" className={styles.link}>
					Home
				</Link>
				<Link to="/characters" className={styles.link}>
					Characters
				</Link>
				<Link to="/comics" className={styles.link}>
					Comics
				</Link>
				{props.loggedIn ? (
					<Link
						onClick={() => context.logout()}
						to="/"
						className={styles.link}
					>
						Log Out
					</Link>
				) : (
					<>
						<Link to="/signup" className={styles.link}>
							Sign Up
						</Link>
						<Link to="/login" className={styles.link}>
							Log In
						</Link>
					</>
				)}
			</div>
		</div>
	);
}