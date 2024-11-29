import { useContext } from "react"
import { SBox } from "./styles"
import Icon from "@/components/Icon"
import { CreateBoardContext } from "../../providers/CreateBoardProvider"

export default function CreateBoardButton() {

    const { openModal } = useContext(CreateBoardContext)

    return(
        <SBox onClick={openModal}>
            <Icon name="add" size="lg"/>
        </SBox>
    )
}