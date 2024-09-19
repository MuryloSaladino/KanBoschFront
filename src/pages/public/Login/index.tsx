import { Box, ThemeProvider, Typography } from "@mui/material";
import appTheme from "../../../styles/theme";
import LoginForm from "./components/LoginForm";

export default function Login() {

    return (
        <ThemeProvider theme={appTheme}>
            <Box flexDirection={"row"} display={"flex"}>
                <Box 
                    bgcolor={"gray"} 
                    height={'100vh'} 
                    width={'50vw'} 
                    sx=
                    {{
                        overflow: 'hidden'
                    }}
                >
                    <img src="/light_bg.png"/>
                </Box>
                <Box 
                    bgcolor={"#006E90"} 
                    height={'100vh'} 
                    width={'50vw'} 
                    textAlign={"center"} 
                    p={'50px'}
                    display={'flex'}
                    flexDirection={'column'}
                    alignItems={"center"}
                >                  
                    <Typography variant="h2" color="white">
                        Login
                    </Typography>
                    <LoginForm/>
                </Box>
            </Box>

        </ThemeProvider>
    )
}