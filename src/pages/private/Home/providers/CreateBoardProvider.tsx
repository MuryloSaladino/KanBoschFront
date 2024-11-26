import { createContext, ReactNode, useState } from "react"

interface ICreateBoardProvider {
    modalOpen: boolean
    openModal: () => void
    closeModal: () => void
    workspaceId?: string
    setWorkspaceId: (id: string) => void
}

export const CreateBoardContext = createContext({} as ICreateBoardProvider)

export function CreateBoardProvider({ 
    children 
}: { 
    children: ReactNode 
}) {

    const [workspaceId, setWorkspaceId] = useState<string>()
    const [modalOpen, setModalOpen] = useState(false)

    return <CreateBoardContext.Provider
        children={children}
        value={{
            modalOpen,
            openModal: () => setModalOpen(true),
            closeModal: () => setModalOpen(false),
            workspaceId,
            setWorkspaceId: (id) => setWorkspaceId(id) 
        }}
    />
}