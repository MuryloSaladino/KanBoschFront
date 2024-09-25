import { AxiosError } from "axios"
import { toast } from "react-toastify"
import API from "./API"
import { TUser } from "../types/user.types.";

export const getUser = async (token:string): Promise<TUser | null> => {
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
    return null;
}