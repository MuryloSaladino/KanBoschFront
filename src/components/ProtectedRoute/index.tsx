import { useContext } from "react"
import { UserContext } from "../../providers/UserProvider"
import { Outlet } from "react-router-dom"
import Login from "../../pages/public/Login"
import { LoadingPage } from "../Loading"

export default function ProtectedRoute() {

    const { user, loadingUser } = useContext(UserContext)

    return (
        loadingUser ? <LoadingPage/> : 
        user ? <Outlet/> :
        <Login/>
    )
}