import useOpen, { IOpenHook } from "@/hooks/useOpen";
import { createContext, ReactNode } from "react";

interface IHomeContext {
    boardModal: IOpenHook
    workspaceModal: IOpenHook
}

export const HomeContext = createContext({} as IHomeContext)

export function HomeProvider({ children }: { children: ReactNode }) {
    
    const boardModal = useOpen() 
    const workspaceModal = useOpen() 

    return (
        <HomeContext.Provider
            children={children}
            value={{
                boardModal,
                workspaceModal
            }}
        />
    )
}
