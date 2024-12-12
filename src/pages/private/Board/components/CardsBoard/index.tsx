import { useParams } from "react-router-dom"
import styles from "./styles.module.css"
import { useEffect, useState } from "react"
import api from "@/service/internal.services"
import { ICard, ICardList } from "@/interfaces/cards.interfaces"
import CardList from "../CardList"

export default function CardsBoard() {

    const { boardId } = useParams()
    const [loading, setLoading] = useState(false)
    const [cardsData, setCardsData] = useState<ICardList[]>([])

    useEffect(() => {
        (async () => {
            setLoading(true)
            const { data } = await api.get<ICardList[]>(`/card-lists/boards/${boardId}`)
            if(!data) return;

            const listsWithCards = await Promise.all(
                data.map(async (list) => {
                    const { data: cards } = await api.get<ICard[]>(`/cards/card-lists/${list.id}`)
                    return { ...list, cards: cards || [] }
                })
            )

            setCardsData(listsWithCards)
            setLoading(false)
        })()
    }, [boardId])
    
    return (
        <div className={`${styles.container} ${loading ? "loading" : ""}`}>
            <ol>
                {cardsData.map(list => (
                    <CardList
                        key={list.id}
                        cardList={list}
                    />
                ))}
                
                <div className={styles.create_list}>
                    
                </div>
            </ol>
        </div>
    )
}