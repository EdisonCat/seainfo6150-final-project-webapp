import React, { useState, useContext } from "react";
import styles from "../SignUp/SignUp.module.css";
import MarvelFandomContext from "../../Context/MarvelFandomContext";
import { useHistory } from "react-router-dom";
export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const context = useContext(MarvelFandomContext);
	const history = useHistory();
	const handleClick = (e) => {
		e.preventDefault();
		if (
			!localStorage.getItem("mf_email") ||
			localStorage.getItem("mf_email") !== email
		) {
			alert("We could NOT find your account");
			return;
		} else if (localStorage.getItem("mf_pass") !== password) {
			alert("Password is wrong");
			return;
		}
		context.login(localStorage.getItem("mf_username"));
		history.push({ pathname: "/" });
	};
	const handleRedirect = (e) => {
		e.preventDefault();
		history.push({ pathname: "/signup" });
	};
	return (
		<div className={styles.container}>
			<form>
				<input
					className={styles.inputtext}
					type="text"
					placeholder="E-mail"
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					className={styles.inputtext}
					type="password"
					placeholder="Password"
					onChange={(e) => setPassword(e.target.value)}
				/>
			</form>
			<button onClick={(e) => handleClick(e)}>Login</button>
			<button onClick={(e) => handleRedirect(e)}>Register</button>
		</div>
	);
}
