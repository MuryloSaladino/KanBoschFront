import { Outlet } from "react-router-dom";
import NotFound from "../../pages/public/NotFound";

export default function RouteProtection() {
    return localStorage.getItem("@TOKEN") ? <Outlet/> : <NotFound/>
}