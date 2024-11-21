import "./styles/global.css"

import { UserProvider } from "./providers/UserProvider";
import { RouterProvider } from "react-router-dom";
import router from "./router";

import { ThemeProvider } from "@emotion/react";
import appTheme from "./styles/theme";

import { ToastContainer } from "react-toastify";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

export default function App() {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <UserProvider>
                <ThemeProvider theme={appTheme}>
                    <RouterProvider router={router}/>
                </ThemeProvider>
                <ToastContainer position="top-center"/>
            </UserProvider>
        </LocalizationProvider>
    )    
}