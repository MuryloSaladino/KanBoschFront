import styles from "./styles.module.css"
import Header from "@/components/Header";
import Menu from "./components/Menu";
import CardLists from "./components/CardLists";
import BoardHeader from "./components/BoardHeader";

export default function Board() {
    return(
        <>
            <Header/>

            <div className={styles.container}>
                <Menu/>

                <div className={styles.main_content}>
                    <BoardHeader/>
                    <CardLists/>
                </div>
            </div>
        </>
    )
}