import styles from "./styles.module.css"
import { ICard } from "@/interfaces/cards.interfaces"
import Text from "@/components/Text"
import { useState } from "react"
import Draggable from "react-draggable"
import { useNavigate } from "react-router-dom"

interface ICardProps {
    card: ICard
}

export default function Card({ card }: ICardProps) {

    const [dragging, setDragging] = useState(false)
    const [mouseMoved, setMouseMoved] = useState(false)
    const navigate = useNavigate()

    const startDrag = () => {
        setDragging(true)
        setMouseMoved(false)
    }

    const drag = () => {
        setMouseMoved(true)
    }

    const endDrag = () => {
        setDragging(false)
    }

    return (
        <Draggable
            onStart={startDrag}
            onStop={endDrag}
            onDrag={drag}
        >
            <div 
                className={`${styles.card} ${dragging ? styles.dragging : ""}`}
                onClick={() => !mouseMoved && navigate(`c/${card.id}`)}
            >
                <Text>{card.description}</Text>
            </div>
        </Draggable>
    )
}