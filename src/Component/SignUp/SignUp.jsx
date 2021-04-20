import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import styles from "./SignUp.module.css";
import MarvelFandomContext from "../../Context/MarvelFandomContext";
export default function SignUp() {
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [confirm, setConfirm] = useState("");
	const [type, setType] = useState("Normal");
	const [agreement, setAgreement] = useState(false);
	const [event, setEvent] = useState(true);
	const [tv, setTv] = useState(true);
	const [comics, setComics] = useState(true);
	const [movies, setMovies] = useState(true);
	const [join, setJoin] = useState("Marvel and Medicine");
	const history = useHistory();
	const context = useContext(MarvelFandomContext);
	const emailPattern = new RegExp(
		/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
	);
	const handleClick = async (e) => {
		e.preventDefault();
		if (!emailPattern.test(email)) {
			alert("Please enter a valid email address!");
			return;
		} else if (username.length <= 3) {
			alert("Username must be longer than 3 characters!");
			return;
		} else if (password.length < 6) {
			alert("Password must be longer than 6 digits!");
			return;
		} else if (password !== confirm) {
			alert("Please check your password!");
			return;
		} else if (!type) {
			alert("Please the type of account you'd like to sign up for!");
			return;
		} else if (!agreement) {
			alert("Please read the agreement!");
			return;
		}
		const res = await fetch("https://demo9528898.mockable.io/signup", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: {
				email: email,
				username: username,
				password: password,
			},
		});
		if (res.status === 200) {
			context.login(username);
			localStorage.setItem("mf_username", username);
			localStorage.setItem("mf_email", email);
			localStorage.setItem("mf_pass", password);
			history.push({
				pathname: "/signup/success",
				state: {
					username: username,
					type: type,
					event: event,
					comics: comics,
					tv: tv,
					movies: movies,
					join: join,
				},
			});
		}
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
					type="text"
					placeholder="Username"
					onChange={(e) => setUsername(e.target.value)}
				/>
				<input
					className={styles.inputtext}
					type="password"
					placeholder="Password"
					onChange={(e) => setPassword(e.target.value)}
				/>
				<input
					className={styles.inputtext}
					type="password"
					placeholder="Confirm your password"
					onChange={(e) => setConfirm(e.target.value)}
				/>
				<label htmlFor="type">
					Type of Account:
					<select id="type" onChange={(e) => setType(e.target.value)}>
						<option value="normal">Normal</option>
						<option value="premium">Premium</option>
						<option value="gold">Gold</option>
						<option value="Diamond">Diamond</option>
					</select>
				</label>
				<label htmlFor="join">
					Join an ongoing event:
					<select id="join" onChange={(e) => setJoin(e.target.value)}>
						<option value="">Not interested</option>
						<option value="Marvel and Medicine">
							Marvel and Medicine
						</option>
						<option value="Marvel for Homeless">
							Marvel for Homeless
						</option>
						<option value="Marvel Foundation">
							Marvel Foundation
						</option>
						<option value="Marvel TED Talk">Marvel TED Talk</option>
					</select>
				</label>

				<fieldset>
					I want to subscribe to notification emails for
					<label htmlFor="events">
						<input
							className={styles.check}
							id="events"
							defaultChecked={true}
							type="checkbox"
							onChange={() => setEvent(!event)}
						/>
						Events
					</label>
					<label htmlFor="comics">
						<input
							className={styles.check}
							id="comics"
							defaultChecked={true}
							type="checkbox"
							onChange={() => setComics(!comics)}
						/>
						Comics
					</label>
					<label htmlFor="tv">
						<input
							className={styles.check}
							id="tv"
							defaultChecked={true}
							type="checkbox"
							onChange={() => setTv(!tv)}
						/>
						TV Shows
					</label>
					<label htmlFor="movies">
						<input
							className={styles.check}
							id="movies"
							defaultChecked={true}
							type="checkbox"
							onChange={() => setMovies(!movies)}
						/>
						Movies
					</label>
				</fieldset>
				<label htmlFor="check">
					I agree to the&nbsp;
					<a
						href="https://disneytermsofuse.com/english/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Terms of Service
					</a>
					&nbsp;and&nbsp;
					<a
						href="https://privacy.thewaltdisneycompany.com/en/current-privacy-policy/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Privacy Policy
					</a>
					.
					<input
						className={styles.check}
						defaultChecked={false}
						id="check"
						type="checkbox"
						onChange={() => setAgreement(!agreement)}
					/>
				</label>
			</form>
			<button onClick={(e) => handleClick(e)}>Sign Up</button>
		</div>
	);
}