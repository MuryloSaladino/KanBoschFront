import { useEffect, useState } from "react";
import { IWorkspace } from "../../../../interfaces/workspaces.interfaces";
import internalAPI from "../../../../service/internal.services";

export default function useWorkspacesByUser(userId?: string, feedback?: boolean) {

    const [workspaces, setWorkspaces] = useState<IWorkspace[]>([])

    const fetchWorkspaces = async () => {
        if(userId) {
            const { success, data, showMessage } = await internalAPI.get(`/workspaces/users/${userId}`)
    
            if(success) {
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