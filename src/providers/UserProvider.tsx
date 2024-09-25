import { ReactNode, createContext, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TUser } from "../types/user.types.";
import { loginService } from "../service/login";
import { getUser } from "../service/users";

interface IUserProvider {
    user: TUser | null;
    login: (email:string, password:string) => Promise<void>;
    logout: () => void;
    loadingUser: boolean;
}

export const UserContext = createContext({} as IUserProvider)

export function UserProvider({ children }: { children?: ReactNode }) {

    const navigate = useNavigate();
    const [user, setUser] = useState<TUser | null>(null);
    const [loadingUser, setLoadingUser] = useState(false);
    
    const login = async (email:string, password:string) => {
        setLoadingUser(true);
        const response = await loginService(email, password);
        if(!response) return;

        setUser(response.user);
        localStorage.setItem("@TOKEN", response.token);
        navigate("/dashboard");
        setLoadingUser(false);
    }

    const autoLogin = useCallback(async () => {
        setLoadingUser(true);
        const token = localStorage.getItem("@TOKEN");
        if(!token) return;
    
        setUser(await getUser(token));
        setLoadingUser(false);
    }, [])

    const logout = () => {
        setUser(null);
        localStorage.removeItem("@TOKEN");
        navigate("/login");
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