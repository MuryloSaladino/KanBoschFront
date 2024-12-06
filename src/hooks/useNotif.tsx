import { IWorkspace } from "@/interfaces/workspaces.interfaces";
import internalAPI from "@/service/internal.services";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function useNotifs(feedback?: boolean) {

    const [notifications, setNotifications] = useState([])
    const { userId } = useParams()

    const fetchWorkspaces = async () => {
        if(userId) {
            const { success, data, showMessage } = await internalAPI.get<IWorkspace[]>(`/workspaces/users/${userId}`)
    
            if(data && success) {
                setWorkspaces(data)
            }
            if(feedback) {
                showMessage()
            }
        }
    }

    useEffect(() => {
        fetchWorkspaces()      
    }, [])

    return { fetchWorkspaces, workspaces }
}