import Modal from "@/components/Modal"
import { useContext } from "react"
import { HomeContext } from "../../context"
import Text from "@/components/Text"
import styles from "./styles.module.css"
import { IFormInput } from "@/components/Form/types"
import Form from "@/components/Form"
import { IBoard, IBoardCreation } from "@/interfaces/boards.interfaces"
import internalServices from "@/service/internal.services"

export default function CreateBoardModal() {

    const { boardModal, workspaces, addBoard } = useContext(HomeContext)

    const workspaceOptions = workspaces.map(w => ({ value: w.id, label: w.name }))

    const fields:IFormInput[] = [
        { fieldName: "name", label: "board name" },
        { type: "select", fieldName: "workspaceId", options: workspaceOptions, label: "select workspace" },
    ]

    const submit = async ({ workspaceId, ...payload }: IBoardCreation) => {
        const { data, success, showMessage } = await internalServices.post<IBoard>(`/boards/workspaces/${workspaceId}`, payload)
        
        if(data && success) {
            addBoard(data, workspaceId)
            boardModal.hide()
            return
        }
        showMessage()
    }

    return(
        <Modal 
            open={boardModal.open} 
            onClose={boardModal.hide}
            maxWidth="sm"
        >
            <div className={styles.container}>
                <Text fontSize="xl2">Create Board</Text>

                <Form
                    fields={fields}
                    onSubmit={submit}
                    submitText="create"
                />
            </div>
        </Modal>
    )
}