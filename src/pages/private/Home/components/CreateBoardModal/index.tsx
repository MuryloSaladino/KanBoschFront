import { Modal } from "@mui/material";
import { useContext } from "react";
import { CreateBoardContext } from "../../providers/CreateBoardProvider";
import { SDialog } from "./styles";

export default function CreateBoardModal() {

    const { modalOpen, closeModal } = useContext(CreateBoardContext)

    return(
        <Modal
            open={modalOpen}
            onClose={closeModal}
        >
            <SDialog>
                
            </SDialog>
        </Modal>
    )
}