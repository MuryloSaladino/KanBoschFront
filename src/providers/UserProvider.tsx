import { ReactNode, createContext, useCallback, useEffect, useState } from "react";
import { TUser } from "../types/user.types.";
import { loginService } from "../service/login";
import { getUser } from "../service/users";

interface IUserProvider {
    user?: TUser;
    login: (email:string, password:string, redirect?:() => void) => Promise<void>;
    logout: () => void;
    loadingUser: boolean;
}

export const UserContext = createContext({} as IUserProvider)

export function UserProvider({ children }: { children?: ReactNode }) {

    const [user, setUser] = useState<TUser>();
    const [loadingUser, setLoadingUser] = useState(false);
    
    const login = async (email:string, password:string, redirect?:() => void) => {
        setLoadingUser(true);
        const response = await loginService(email, password);
        if(response) {
            localStorage.setItem("@TOKEN", response.token);
            setUser(response.user);
            if(redirect) redirect()
        }
        setLoadingUser(false);
    }

    const autoLogin = useCallback(async () => {
        const token = localStorage.getItem("@TOKEN");
        if(token) {
            setLoadingUser(true);
            setUser(await getUser(token));
            setTimeout(() => {
                setLoadingUser(false);
            }, 1500)
        }
    }, [])

    const logout = () => {
        setUser(undefined);
        localStorage.removeItem("@TOKEN");
    }

    useEffect(() => {
        autoLogin();
    }, [])

    return(
        <UserContext.Provider
            children={children}
            value={{ user, login, logout, loadingUser }}
        />
    )
}