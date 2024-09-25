import { Box, Button, Container, Stack, TextField, ThemeProvider, Typography } from "@mui/material";
import appTheme from "../../../styles/theme";
import { useContext } from "react";
import { UserContext } from "../../../providers/UserProvider";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import LogoTitle from "../../../components/LogoTitle";
import { Link } from "react-router-dom";
import API from "../../../service/API";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

export default function Login() {

    const { login } = useContext(UserContext);
    const { register, handleSubmit } = useForm();

    const submit:SubmitHandler<FieldValues> = async (data) => {
        try {
            await API.post("login", data);
        } catch (error) {
            if(error instanceof AxiosError)
                toast.error(error.response?.data.message)
        }
    }

    return (
        <ThemeProvider theme={appTheme}>
            <Container maxWidth="xs">
                <Box 
                    mt="20vh" 
                    display="flex" 
                    flexDirection="column"
                    gap={7} 
                    borderRadius={2}
                    boxShadow={3} 
                    p={5}
                >
                    <LogoTitle/>
                    
                    <Stack
                        onSubmit={handleSubmit(submit)}
                        component="form" 
                        gap={2} 
                    >
                        <TextField
                            {...register("email")}
                            label="email"
                            autoComplete="off"
                            required
                        />

                        <TextField
                            {...register("password")}
                            label="password"
                            autoComplete="off"
                            type="password"
                            required
                        />

                        <Button
                            type="submit"
                            variant="contained"
                            sx={{ alignSelf: "end", color: "white" }}
                        >Login</Button>
                    </Stack>
                    
                    <Typography textAlign="center">
                        Não possui uma conta ainda? <br/>
                        <Link to="/register">Registre-se</Link> 
                    </Typography>
                </Box>
            </Container>
        </ThemeProvider>
    )
}