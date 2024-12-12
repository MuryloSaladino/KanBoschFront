import Modal from "@/components/Modal"
import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

export default function CardModal() {

    const { cardId, workspaceId, boardId } = useParams()
    const navigate = useNavigate()
    
    useEffect(() => {
        
    }, [cardId])

    return (
        <Modal 
            open={!!cardId}
            onClose={() => navigate(`/w/${workspaceId}/b/${boardId}`)}
            maxWidth="lg"
        >
            <div>

            </div>
        </Modal>
    )
}