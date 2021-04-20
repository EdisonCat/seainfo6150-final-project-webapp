import React, {useState, useEffect} from "react";
import styles from "./ComicsList.module.css";
import ComicsCard from "../ComicsCard/ComicsCard";
export default function ComicsList() {
    const [items, setItems] = useState([]);
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            const url = `${process.env.REACT_APP_MARVEL_COMICS_PATH}${process.env.REACT_APP_MARVEL_API_HASH}&offset=${page}`;
            const res = await fetch(url, {
                method: "GET", 
                headers: {"Content-Type" : "application/json"}
            });
            const json = await res.json();
            setItems(json.data.results);
            setLoading(false);
        }
        fetchData();
    }, [page]);
    return (
        <div className={styles.container}>
            {
                loading ? "Loading..." : 
            <div className={styles.list}>
                {items.map((item, idx) => <ComicsCard key={idx} item={item}/>)}
            </div>
            }
			<div className={styles.cta}>
				{page === 0 ? null : (
					<button onClick={() => setPage(page - 20)}>Previous</button>
				)}
				<button onClick={() => setPage(page + 20)}>Next</button>
			</div>
        </div>
    );
}