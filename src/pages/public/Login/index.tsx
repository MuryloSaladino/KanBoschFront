import { SubmitHandler, useForm } from "react-hook-form";
import { LoginContainer, SubmitButton } from "./styles";
import { Stack, TextField, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import internalAPI from "../../../service/internal.services";
import { KeyboardEvent } from "react";
import Logo from "../../../components/Logo";

interface ILoginPayload {
    email: string
    password: string
}

export default function Login() {

    const { register, handleSubmit } = useForm<ILoginPayload>()
    const navigate = useNavigate()

    const submit:SubmitHandler<ILoginPayload> = async (payload) => {
        const { data, showMessage, success } = await internalAPI.post("/login", payload)
        
        if(data && success) {
            localStorage.setItem("@TOKEN", data.token)
            navigate("/home")
            return
        }
        showMessage()
    }

    const handleSubmitOnEnter = (e:KeyboardEvent<HTMLDivElement>) => {
        if(e.key === "Enter") {
            handleSubmit(submit)
        }
    }

    return (
        <LoginContainer onSubmit={handleSubmit(submit)}>

            <Stack spacing={3}>
                <Logo/>
                <Typography
                    variant="h5"
                    textAlign="center"
                    color="gray"
                >Login to your account</Typography>
            </Stack>
            
            <Stack spacing={3}>
                <TextField
                    label="email"
                    {...register("email")}
                    required
                    onKeyDown={handleSubmitOnEnter}
                />
                <TextField
                    label="password"
                    type="password"
                    {...register("password")}
                    required
                    onKeyDown={handleSubmitOnEnter}
                />
            </Stack>

            <SubmitButton
                type="submit"
                variant="contained"
            >login</SubmitButton>

            <Typography variant="body1" textAlign="center">
                New around here? <Link to="/register">Register</Link> to have full control over your projects today!
            </Typography>
        </LoginContainer>
    )
}