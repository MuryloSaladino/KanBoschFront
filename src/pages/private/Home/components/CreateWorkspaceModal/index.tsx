import Modal from "@/components/Modal"
import { HomeContext } from "../../context"
import { useContext } from "react"

export default function CreateWorkspaceModal() {

    const { workspaceModal } = useContext(HomeContext)

    return(
        <Modal open={workspaceModal.open} onClose={workspaceModal.hide}>
            
        </Modal>
    )
}