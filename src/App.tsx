import { UserProvider } from "./providers/UserProvider";
import { RouterProvider } from "react-router-dom";
import router from "./router";

import { ThemeProvider } from "@emotion/react";
import appTheme from "./styles/theme";

import "./styles/global.css"

export default function App() {
    return (
        <UserProvider>
            <ThemeProvider theme={appTheme}>
                <RouterProvider router={router}/>
            </ThemeProvider>
            
        </UserProvider>
    )    
}