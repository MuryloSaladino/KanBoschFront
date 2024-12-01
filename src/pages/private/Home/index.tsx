import CreateBoardModal from "./components/CreateBoardModal";
import Header from "@/components/Header";
import useWorkspaces from "./hooks/useWorkspaces";
import styles from "./styles.module.css"

export default function Home() {

    const { workspaces } = useWorkspaces()
    console.log(workspaces)

    return(
        <>
            <CreateBoardModal/>

            <Header/>

            <div className={styles.container}>
                
            </div>
        </>
    )
}