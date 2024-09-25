import { AxiosError } from "axios"
import API from "./API"
import { TUser } from "../types/user.types.";

export const loginService = async (email:string, password:string, onError?:(err:AxiosError) => void):Promise<{token:string, user:TUser} | null> => {
    try {
        return (await API.post("/login", { email, password })).data;
    } catch (err) {
        if(err instanceof AxiosError && onError)
            onError(err)
    }
    return null;
}