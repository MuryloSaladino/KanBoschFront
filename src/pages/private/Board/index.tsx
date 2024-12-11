import styles from "./styles.module.css"
import Header from "@/components/Header";
import Menu from "./components/Menu";
import CardList from "./components/CardList";

export default function Board() {
    return(
        <>
            <Header/>

            <div className={styles.container}>
                <Menu/>
                <CardList/>
            </div>
        </>
    )
}