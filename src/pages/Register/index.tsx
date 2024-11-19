import { ThemeProvider, Typography } from "@mui/material";
import appTheme from "../../styles/theme";

export default function Register() {

    return (
        <ThemeProvider theme={appTheme}>
            <Typography variant="h2">Register</Typography>
        </ThemeProvider>
    )
}