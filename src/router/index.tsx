import { createBrowserRouter } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import Register from "../pages/Register";
import RouteProtection from "../components/RouteProtection";

const router = createBrowserRouter([
    {
        path: "*",
        element: <NotFound/>
    },
    {
        path: "/login",
        element: <Login/> 
    },
    {
        path: "/register",
        element: <Register/> 
    },
    {
        path: "/",
        element: <RouteProtection/>,
        children: [
            
        ]
    }
])

export default router