import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/public/Login";
import ProtectedRoute from "../components/ProtectedRoute";
import Home from "../pages/public/Home";
import NotFound from "../pages/public/NotFound";
import Register from "../pages/public/Register";
import Dashboard from "../pages/protected/Dashboard";

const mainRouter = createBrowserRouter([
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
        element: <Home/>
    },
    {
        path: "/",
        element: <ProtectedRoute/>,
        children: [
            {
                path: "/dashboard",
                element: <Dashboard/>
            }
        ]
    }
])

export default mainRouter