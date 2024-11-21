import { ThemeProvider, Typography } from "@mui/material";
import appTheme from "../../../styles/theme";

export default function Login() {

    return (
        <ThemeProvider theme={appTheme}>
            <Typography variant="h2">Login</Typography>
        </ThemeProvider>
    )
}