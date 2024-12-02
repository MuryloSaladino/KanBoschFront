import styles from "./styles.module.css"
import Link from "@/components/Link"
import Text from "@/components/Text"
import { Routes } from "@/constants/routes"
import { IBoard } from "@/interfaces/boards.interfaces"
import { useContext } from "react"
import { HomeContext } from "../../context"
import Icon from "@/components/Icon"

interface IBoardCardProps {
    boards: IBoard[]
}

export default function Boards({ boards }: IBoardCardProps) {

    const { boardModal } = useContext(HomeContext) 

    return(
        <div className={styles.grid_container}>
            {boards.map(board => (
                <Link to={Routes.BOARD.replace(":boardId", board.id)} type="box" key={board.id} className={styles.grid_child}>
                    <div className={styles.card} style={{ backgroundColor: board.color }}>
                        <Text fontSize="xl2" className={styles.card_title}>{ board.name }</Text>
                    </div>
                </Link>
            ))}
            <div
                onClick={boardModal.show}
                className={`${styles.grid_child} ${styles.creation_btn}`}>
                <Icon name="add" size="lg"/>
            </div>
        </div>
    )
}

