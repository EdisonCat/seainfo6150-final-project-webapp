import React, {useContext} from "react";
import { Link } from "react-router-dom";
import styles from "./Sidebar.module.css";
import MarvelFandomContext from "../../Context/MarvelFandomContext";
export default function Sidebar(props) {
    const context = useContext(MarvelFandomContext);
    const handleLogout = () => {
        context.logout();
        props.setSidebar(false);
    }
	return (
		<div
			className={styles.container}
			style={props.sidebar ? { left: "0px", top: "113px" } : {}}
		>
			<Link
				className={styles.link}
				to="/"
				onClick={() => props.setSidebar(false)}
			>
				Home
			</Link>
			{props.loggedIn ? (
				<Link className={styles.link} to="/" onClick={() => handleLogout()}>
					Log Out
				</Link>
			) : (
				<>
					<Link
						className={styles.link}
						to="/signup"
						onClick={() => props.setSidebar(false)}
					>
						Sign Up
					</Link>
					<Link
						className={styles.link}
						to="/login"
						onClick={() => props.setSidebar(false)}
					>
						Log In
					</Link>
				</>
			)}
			<Link
				className={styles.link}
				to="/characters"
				onClick={() => props.setSidebar(false)}
			>
				Characters
			</Link>
			<Link
				className={styles.link}
				to="/comics"
				onClick={() => props.setSidebar(false)}
			>
				Comics
			</Link>
		</div>
	);
}
