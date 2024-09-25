import { AxiosError } from "axios"
import { toast } from "react-toastify"
import API from "./API"
import { TUser, TUserCreation } from "../types/user.types.";

export const getUser = async (token:string): Promise<TUser | undefined> => {
    try {
        return await API.get(
            "/users", 
            { headers: { Authorization: token } }
        );
    } catch (err) {
        if(err instanceof AxiosError) {
            toast.error(err.response?.data.message);
        }
    }
    return;
}

export const registerService = async (payload:TUserCreation) => {
    try {
        return await API.post("/users", payload)
    } catch (err) {
        if(err instanceof AxiosError) {
            toast.error(err.response?.data.message);
        }
    }
}