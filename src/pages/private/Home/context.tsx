import useOpen, { IOpenHook } from "@/hooks/useOpen";
import { IWorkspace } from "@/interfaces/workspaces.interfaces";
import { createContext, ReactNode, useState } from "react";

interface IHomeContext {
    boardModal: IOpenHook
    workspaceModal: IOpenHook
    workspaces: IWorkspace[]
    addWorkspace: (w: IWorkspace) => void
    setWorkspaces: (ws: IWorkspace[]) => void
    workspaceId?: string
    setWorkspaceId: (id: string) => void
}

export const HomeContext = createContext({} as IHomeContext)

export function HomeProvider({ children }: { children: ReactNode }) {
    
    const boardModal = useOpen() 
    const workspaceModal = useOpen() 

    const [workspaces, setWorkspaces] = useState<IWorkspace[]>([])
    const [workspaceId, setWorkspaceId] = useState<string>()

    const addWorkspace = (w: IWorkspace) => setWorkspaces(prev => [...prev, w])

    return (
        <HomeContext.Provider
            children={children}
            value={{
                boardModal,
                workspaceModal,
                workspaceId,
                workspaces,
                addWorkspace,
                setWorkspaceId: (id: string) => setWorkspaceId(id),
                setWorkspaces: (ws: IWorkspace[]) => setWorkspaces(ws)
            }}
        />
    )
}
