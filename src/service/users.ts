import { AxiosError } from "axios"
import API from "./API"
import { TUser, TUserCreation } from "../types/user.types.";

export const getUser = async (token:string, onError?:(err:AxiosError) => void): Promise<TUser | undefined> => {
    try {
        return await API.get(
            "/users", 
            { headers: { Authorization: `Bearer ${token}` } }
        );
    } catch (err) {
        if(err instanceof AxiosError && onError)
            onError(err)
    }
    return;
}

export const registerService = async (payload:TUserCreation, onError?:(err:AxiosError) => void) => {
    try {
        return await API.post("/users", payload)
    } catch (err) {
        if(err instanceof AxiosError && onError)
            onError(err)
    }
}