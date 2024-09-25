import { AxiosError } from "axios"
import { toast } from "react-toastify"
import API from "./API"
import { TUser } from "../types/user.types.";

export const loginService = async (email:string, password:string):Promise<{token:string, user:TUser} | null> => {
    try {
        return await API.post("/login", { email, password });
    } catch (err) {
        if(err instanceof AxiosError)
            toast.error(err.response?.data.message)
    }
    return null;
}