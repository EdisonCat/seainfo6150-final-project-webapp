import React from "react";
import styles from "./Footer.module.css";
import { useHistory} from "react-router-dom";
export default function Footer() {
    const history = useHistory();
    const handleHome = () => {
        history.push({pathname: "/"});
    }
    return (
        <div className={styles.container}>
            <ul>
                <li onClick={() => handleHome()} className={styles.link}>Marvel Fandom</li>
                <li>made by&nbsp;<a className={styles.link} target="_blank" rel="noopener noreferrer" href="https://edisonguo.tech">Edison</a></li>
            </ul>
        </div>
    );
}