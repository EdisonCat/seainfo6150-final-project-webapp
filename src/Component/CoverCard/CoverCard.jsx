import React from "react";
import styles from "./CoverCard.module.css";
import { useHistory } from "react-router-dom";
export default function CoverCard(props) {
    const history = useHistory();
    const handleTrailer = () => {
        history.push({pathname: "/trailer", state: {url: props.show.url}});
    }
    return (
        <div className={styles.container} onClick={() => handleTrailer()}>
            <img className={styles.thumbnail} src={props.show.thumbnail} alt="thumbnail"/>
            <div className={styles.title}>
                {props.show.title}
            </div>
        </div>
    );
} 