import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import mainRouter from "./routes";

import "./styles/reset.css"
import "./styles/global.css"
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from "@emotion/react";
import appTheme from "./styles/theme";

export default function App() {

    return(
        <ThemeProvider theme={appTheme}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <RouterProvider router={mainRouter}/>
            </LocalizationProvider>
            <ToastContainer
                position='top-center'
            />
        </ThemeProvider>
    )
}