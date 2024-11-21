import { createBrowserRouter } from "react-router-dom";
import NotFound from "../pages/public/NotFound";
import Login from "../pages/public/Login";
import Register from "../pages/public/Register";
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