import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";
import LoadingPage from "../LoadingPage";
import Login from "../../pages/public/Login";

export default function RouteProtection() {

    const { user, loadingUser } = useContext(UserContext)

    if(loadingUser) return <LoadingPage/>

    if(!user) return <Login/>

    return <Outlet/>
}