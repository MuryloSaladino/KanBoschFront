import "./styles/global.css"

import { UserProvider } from "./providers/UserProvider";
import { RouterProvider } from "react-router-dom";
import router from "./router";

import { ThemeProvider } from "@emotion/react";
import appTheme from "./styles/theme";

import { ToastContainer } from "react-toastify";

export default function App() {
    return (
        <UserProvider>
            <ThemeProvider theme={appTheme}>
                <RouterProvider router={router}/>
            </ThemeProvider>
            <ToastContainer position="top-center"/>
        </UserProvider>
    )    
}