import CreateBoardModal from "./components/CreateBoardModal";
import Header from "@/components/Header";
import useWorkspaces from "./hooks/useWorkspaces";
import styles from "./styles.module.css"
import WorkspaceCard from "./components/WorkspaceCard";
import Text from "@/components/Text";
import CreateWorkspaceModal from "./components/CreateWorkspaceModal";
import { HomeProvider } from "./context";

export default function Home() {

    const { workspaces } = useWorkspaces()

    return(
        <HomeProvider>
            <CreateBoardModal/>
            <CreateWorkspaceModal/>

            <Header/>

            <div className={styles.container}>
                <Text fontSize="xl2" fontWeight="semibold">Workspaces</Text>

                {workspaces.map(workspace => (
                    <WorkspaceCard key={workspace.id} workspace={workspace}/>
                ))}
            </div>
        </HomeProvider>
    )
}