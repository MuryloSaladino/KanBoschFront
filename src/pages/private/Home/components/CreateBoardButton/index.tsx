import { useContext } from "react"
import { CreateBoardContext } from "../../providers/CreateBoardProvider"
import { SBox } from "./styles"
import Icon from "../../../../../components/Icon"

export default function CreateBoardButton() {

    const { openModal } = useContext(CreateBoardContext)

    return(
        <SBox onClick={openModal}>
            <Icon name="add" size="lg"/>
        </SBox>
    )
}