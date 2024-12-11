import { useParams } from "react-router-dom"
import styles from "./styles.module.css"
import { useEffect, useState } from "react"
import useLoading from "@/hooks/useLoading"
import api from "@/service/internal.services"
import { ICardList } from "@/interfaces/cards.interfaces"

export default function CardLists() {

    const { boardId } = useParams()
    const { loading, loadCallback } = useLoading(api.get)
    const [cardLists, setCardLists] = useState<ICardList[]>()
    console.log(cardLists)

    useEffect(() => {
        (async () => {
            const { data } = await loadCallback(`/card-lists/boards/${boardId}`)
            setCardLists(data)
        })()
    }, [])
    
    return (
        <div className={`${styles.container} ${loading ? "loading" : ""}`}>
            
            <div className={styles.create_list}>
                
            </div>
        </div>
    )
}