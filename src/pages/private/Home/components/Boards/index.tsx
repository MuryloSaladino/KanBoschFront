import styles from "./styles.module.css"
import Link from "@/components/Link"
import Text from "@/components/Text"
import { IBoard } from "@/interfaces/boards.interfaces"

interface IBoardCardProps {
    boards: IBoard[]
}

export default function Boards({ boards }: IBoardCardProps) {
    return(
        <div className={styles.grid_container}>
            {boards.map(board => (
                <Link to="" type="box" key={board.id} className={styles.grid_child}>
                    <div className={styles.card} style={{ backgroundColor: board.color }}>
                        <Text fontSize="xl2" className={styles.card_title}>{ board.name }</Text>
                    </div>
                </Link>
            ))}
        </div>
    )
}

