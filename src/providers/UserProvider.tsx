import { ReactNode, createContext, useEffect, useState } from "react";
import { IUser } from "../interfaces/user.interfaces";
import internalAPI from "../service/internal.services";

interface IUserProvider {
    user: IUser | null
    handleSetUser: (user: IUser | null) => void
    loadingUser: boolean
}

export const UserContext = createContext({} as IUserProvider)

export function UserProvider({ children }: { children?: ReactNode }) {

    const [user, setUser] = useState<IUser | null>(null)
    const [loadingUser, setLoadingUser] = useState(false)

    const handleSetUser = (user: IUser | null) => {
        setUser(user)
    }

    useEffect(() => {
        (async () => {
            setLoadingUser(true)

            const { data } = await internalAPI.get<IUser>("/users")
            setUser(data)
            
            setLoadingUser(false)
        })()
    }, [])

    return(
        <UserContext.Provider
            children={children}
            value={{ user, handleSetUser, loadingUser }}
        />
    )
}