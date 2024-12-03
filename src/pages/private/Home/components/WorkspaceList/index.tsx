import styles from "./styles.module.css"
import Text from "@/components/Text";
import Button from "@/components/Button";
import useWorkspaces from "../../hooks/useWorkspaces";
import WorkspaceCard from "../WorkspaceCard";
import { useContext } from "react";
import { HomeContext } from "../../context";

export default function WorkspaceList() {

    const { workspaces } = useWorkspaces()
    const { workspaceModal } = useContext(HomeContext)

    return(
        <div className={styles.container}>
            <div className={styles.aligned}>
                <Text fontSize="xl2" fontWeight="semibold">Workspaces</Text>
                <Button onClick={workspaceModal.show} iconName="add">Create</Button>
            </div>

            {workspaces.map(workspace => (
                <WorkspaceCard key={workspace.id} workspace={workspace}/>
            ))}
        </div>
    )
}