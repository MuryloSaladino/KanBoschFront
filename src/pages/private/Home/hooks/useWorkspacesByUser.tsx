import { useContext, useEffect, useState } from "react";
import { IWorkspace } from "../../../../interfaces/workspaces.interfaces";
import internalAPI from "../../../../service/internal.services";
import { UserContext } from "../../../../providers/UserProvider";

export default function useWorkspaces(feedback?: boolean) {

    const [workspaces, setWorkspaces] = useState<IWorkspace[]>([])
    const { user } = useContext(UserContext)

    const fetchWorkspaces = async () => {
        if(user) {
            const { success, data, showMessage } = await internalAPI.get<IWorkspace[]>(`/workspaces/users/${user.id}`)
    
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