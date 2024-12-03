import Modal from "@/components/Modal"
import { useContext } from "react"
import { HomeContext } from "../../context"
import Text from "@/components/Text"
import styles from "./styles.module.css"
import { IFormInput } from "@/components/Form/types"
import Form from "@/components/Form"
import { IBoardCreation } from "@/interfaces/boards.interfaces"

export default function CreateBoardModal() {

    const { boardModal } = useContext(HomeContext)
    

    const fields:IFormInput[] = [
        { type: "select", fieldName: "workspaceId" }
    ]

    const submit = async (data: IBoardCreation) => {
        console.log(data);
    }

    return(
        <Modal 
            open={boardModal.open} 
            onClose={boardModal.hide}
        >
            <div className={styles.container}>
                <Text fontSize="xl2">Create Board</Text>

                <Form
                    fields={fields}
                    onSubmit={submit}
                    submitText="Create"
                />
            </div>
        </Modal>
    )
}