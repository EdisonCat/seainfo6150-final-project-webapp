import React from "react";
import styles from "./ComicsCard.module.css";
import {useHistory} from "react-router-dom";
export default function ComicsCard(props) {
    const history = useHistory();
    const handleClick = () => {
        history.push({pathname: `/comics/${props.item.id}`});
    }
    return (
        <div className={styles.container}>
            <div className={styles.thumbnail}><img src={props.item.thumbnail.path + "." + props.item.thumbnail.extension} alt="thumbnail" /></div>
            <div className={styles.info}>
                <h1>{props.item.title}</h1>
                <div className={styles.cta}>
                    <button onClick={() => handleClick()}>More Info</button>
                </div>
            </div>
        </div>
    );
}