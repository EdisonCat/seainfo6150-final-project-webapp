import React from "react";
import styles from "../SignUp/SignUp.module.css";
import { useHistory } from "react-router-dom";
export default function Success() {
	const history = useHistory();
	const handleClick = () => {
		history.push({ pathname: "/" });
	};
	return (
		<div className={styles.container}>
			<div>
				<h1>
					Thanks for signing up,{" "}
					{history.location.state
						? history.location.state.username
						: "user"}
					!
					<br />
					{history.location.state ? (
						history.location.state.join.length > 0 ? (
							<>
								You've joined our{" "}
								<i>{history.location.state.join}</i> event,
								please check your inbox for more information!
								<br />
							</>
						) : null
					) : null}
					You are now one of our{" "}
					{history.location.state
						? history.location.state.type
						: ""}{" "}
					account members!
					<br />
					You've subscribed to our notification emails for upcoming
					{history.location.state
						? history.location.state.event
							? " events"
							: null
						: null}
					{history.location.state
						? history.location.state.movies
							? " movies"
							: null
						: null}
					{history.location.state
						? history.location.state.tv
							? " TV shows"
							: null
						: null}
					{history.location.state
						? history.location.state.comics
							? " comics"
							: null
						: null}
				</h1>
				<button onClick={() => handleClick()}>Go to home page</button>
			</div>
		</div>
	);
}