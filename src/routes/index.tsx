import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/public/Login";
import ProtectedRoute from "../components/ProtectedRoute";
import Home from "../pages/public/Home";
import { UserProvider } from "../providers/UserProvider";
import NotFound from "../pages/public/NotFound";
import Register from "../pages/public/Register";

export default function MainRoutes(){
    return(
        <RouterProvider
            router={createBrowserRouter([
                {
                    path: "*",
                    element: <NotFound/>
                },
                {
                    path: "/login",
                    element: (
                        <UserProvider> 
                            <Login/> 
                        </UserProvider>
                    )
                },
                {
                    path: "/register",
                    element: <Register/>
                },
                {
                    path: "/home",
                    element: <Home/>
                },
                {
                    path: "/",
                    element: (
                        <UserProvider> 
                            <ProtectedRoute/> 
                        </UserProvider>
                    ),
                    children: []
                }
            ])}
        />
    )
}

// const mainRouter = createBrowserRouter([
//     {
//         path: "*",
//         element: <NotFound/>
//     },
//     {
//         path: "/login",
//         element: (
//             <UserProvider> 
//                 <Login/> 
//             </UserProvider>
//         )
//     },
//     {
//         path: "/register",
//         element: <Register/>
//     },
//     {
//         path: "home",
//         element: <Home/>
//     },
//     {
//         path: "/",
//         element: (
//             <UserProvider> 
//                 <ProtectedRoute/> 
//             </UserProvider>
//         ),
//         children: []
//     }
// ])

// export default mainRouter