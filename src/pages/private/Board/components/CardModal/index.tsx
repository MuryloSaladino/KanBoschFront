import { useEffect } from "react"
import { useParams } from "react-router-dom"

export default function CardModal() {

    const { cardId } = useParams()
    

    useEffect(() => {
        
    }, [cardId])

    return cardId && (
        <div>

        </div>
    )
}