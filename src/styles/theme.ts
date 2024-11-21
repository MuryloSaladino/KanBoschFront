import { createTheme } from "@mui/material";

const appTheme = createTheme({
    palette: {
        primary: {
            light: "#0197ee",
            main: "#00629a",
            dark: "#00395c",
        },
        secondary: {
            light: "#9e2896",
            main: "#791d73",
            dark: "#551151",
        },
        error: {
            light: "#ed0007",
            main: "#be0004",
            dark: "#920002",
        },
        success: {
            light: "#00884a",
            main: "#006c3a",
            dark: "#00512a",
        },
        warning: {
            light: "#ffcf00",
            main: "#deb300",
            dark: "#bd9900",
        },
        info: {
            light: "#18837e",
            main: "#116864",
            dark: "#0a4f4b",
        },
    }
})

export default appTheme