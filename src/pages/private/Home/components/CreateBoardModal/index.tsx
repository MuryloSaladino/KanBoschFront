import Modal from "@/components/Modal"
import { useContext } from "react"
import { HomeContext } from "../../context"

export default function CreateBoardModal() {

    const { boardModal } = useContext(HomeContext)

    return(
        <Modal open={boardModal.open} onClose={boardModal.hide}>
            
        </Modal>
    )
}