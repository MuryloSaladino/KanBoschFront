import { createBrowserRouter } from "react-router-dom";
import NotFound from "../pages/public/NotFound";
import Login from "../pages/public/Login";
import Register from "../pages/public/Register";
import RouteProtection from "../components/RouteProtection";
import Home from "../pages/private/Home";

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
            {
                path: "/home",
                element: <Home/>
            }
        ]
    }
])

export default router