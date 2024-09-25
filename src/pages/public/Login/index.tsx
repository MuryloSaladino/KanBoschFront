import { Box, Button, Container, Stack, TextField, ThemeProvider, Typography } from "@mui/material";
import appTheme from "../../../styles/theme";
import { useContext } from "react";
import { UserContext } from "../../../providers/UserProvider";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import LogoTitle from "../../../components/LogoTitle";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {

    const { login } = useContext(UserContext);
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate()

    const submit:SubmitHandler<FieldValues> = async (data) => {
        await login(data.email, data.password, () => navigate("/dashboard"));
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