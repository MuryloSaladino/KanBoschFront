import styles from "./styles.module.css"
import Header from "@/components/Header";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Menu from "./components/Menu";

export default function Board() {

    const { boardId } = useParams()
    const [asideOpen, setAsideOpen] = useState(window.innerWidth > 500)
    console.log(asideOpen)

    return(
        <>
            <Header/>
            <div className={styles.container}>
                <Menu/>

                <div className={styles.list}>
                    
                </div>
            </div>
        </>
    )
}