import { ReactNode, createContext, useState } from "react";
import { ILoginPayload, IUser } from "../interfaces/user.interfaces";

interface IUserProvider {
    user: IUser | null;
    login: (payload: ILoginPayload) => Promise<void>;
    logout: () => void;
    loadingUser: boolean;
}

export const UserContext = createContext({} as IUserProvider)

export function UserProvider({ children }: { children?: ReactNode }) {

    const [user, setUser] = useState<IUser | null>(null)
    const [loadingUser, setLoadingUser] = useState(false)

    const login = async (payload: ILoginPayload) => {

    }
    const logout = () => {
        
    }

    return(
        <UserContext.Provider
            children={children}
            value={{ user, login, logout, loadingUser }}
        />
    )
}