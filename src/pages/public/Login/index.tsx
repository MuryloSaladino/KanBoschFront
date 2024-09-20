import { Box, ThemeProvider, Typography } from "@mui/material";
import appTheme from "../../../styles/theme";
import LoginForm from "./components/LoginForm";
import { Link } from "react-router-dom";

export default function Login() {

    return (
        <ThemeProvider theme={appTheme}>
            <Box flexDirection={"row"} display={"flex"}>
                <Box 
                    bgcolor={"gray"} 
                    height={'100vh'} 
                    width={'50vw'}
                    sx={{ overflow: 'hidden' 
                }}>
                    <img src="/light_bg.png"/>
                </Box>
                <Box 
                    bgcolor={"#0D3044"} 
                    height={'100vh'} 
                    minWidth={'50vw'} 
                    textAlign={"center"} 
                    p={'20px'}
                    display={'flex'}
                    flexDirection={'column'}
                    alignItems={"center"}
                    justifyContent={"center"}
                >                  
                    <Typography variant="h2" color="white">
                        Login
                    </Typography>
                    <LoginForm/>
                    <Link to={"/register"} style={{color: "white"}}>Not registered? Sign in</Link>
                </Box>
            </Box>
        </ThemeProvider>
    )
}