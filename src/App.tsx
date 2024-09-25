import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import mainRouter from "./routes";

import "./styles/reset.css"
import "./styles/global.css"
import "./styles/animations.css"
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from "@emotion/react";
import appTheme from "./styles/theme";
import { UserProvider } from "./providers/UserProvider";

export default function App() {

    return(
        <ThemeProvider theme={appTheme}>
            <UserProvider>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <RouterProvider router={mainRouter}/>
                </LocalizationProvider>
            </UserProvider>
            <ToastContainer
                position='top-center'
            />
        </ThemeProvider>
    )
}