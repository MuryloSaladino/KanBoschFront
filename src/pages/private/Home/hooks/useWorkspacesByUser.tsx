import { IWorkspace } from "@/interfaces/workspaces.interfaces";
// import internalAPI from "@/service/internal.services";
import { useEffect, useState } from "react";

export default function useWorkspaces(feedback?: boolean) {

    const [workspaces, setWorkspaces] = useState<IWorkspace[]>([])

    const fetchWorkspaces = async () => {
        // if(user) {
            // const { success, data, showMessage } = await internalAPI.get<IWorkspace[]>(`/workspaces/users/${user.id}`)
    
        //     if(data && success) {
        //         setWorkspaces(data)
        //     }
        //     if(feedback) {
        //         showMessage()
        //     }
        // }
    }

    useEffect(() => {
        fetchWorkspaces()      
    }, [])

    return { fetchWorkspaces, workspaces }
}