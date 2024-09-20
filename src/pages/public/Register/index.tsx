import { Box, ThemeProvider, Typography } from "@mui/material";
import appTheme from "../../../styles/theme";
import RegisterForm from "./components";
import { Link } from "react-router-dom";

export default function Register() {

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
                    bgcolor={"#41BBD9"} 
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
                        Register
                    </Typography>
                    <RegisterForm/>
                    <Link to={"/login"} style={{color: "white"}}>Already registered? Login</Link>
                </Box>
            </Box>
        </ThemeProvider>
    )
}