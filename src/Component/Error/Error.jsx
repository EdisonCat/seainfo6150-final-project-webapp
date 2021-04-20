import React from "react";
import styles from "./Error.module.css";

const Error = () => {
	return (
		<div className={styles.container}>
			<h1>PAGE NOT FOUND</h1>
			<h2>You've come to nowhere (Knowhere)... =)</h2>
			<blockquote>
				<h3>
					"Knowhere."
					<br />
					"He must be going somewhere."
					<br />
					"No, no. Knowhere? It's a place, we've been there. It
					sucks."
				</h3>
			</blockquote>
			<h4>―Thor, Mantis and Star-Lord</h4>
		</div>
	);
};

export default Error;
