import { createBrowserRouter } from "react-router-dom";
import NotFound from "../pages/public/NotFound";
import RouteProtection from "../components/RouteProtection";
import Home from "../pages/private/Home";
import { Routes } from "../constants/routes";
import Login from "../pages/public/Login";
import Register from "../pages/public/Register";

const router = createBrowserRouter([
    {
        path: Routes.NOT_FOUND,
        element: <NotFound/>
    },
    {
        path: Routes.LOGIN,
        element: <Login/> 
    },
    {
        path: Routes.REGISTER,
        element: <Register/> 
    },
    {
        path: Routes.HOME,
        element: <RouteProtection/>,
        children: [
            {
                index: true,
                element: <Home/>
            }
        ]
    }
])

export default router