import React from "react";
import styles from "./Trailer.module.css";
import {useHistory} from "react-router-dom";
export default function Trailer() {
    const history = useHistory();
    return (
        <div className={styles.container}>
            <iframe width="807" height="454" src={history.location.state ? history.location.state.url : "/"} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
    );
}