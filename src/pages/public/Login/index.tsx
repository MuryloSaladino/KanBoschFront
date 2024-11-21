import { SubmitHandler, useForm } from "react-hook-form";
import { LoginContainer, SubmitButton } from "./styles";
import { Stack, TextField, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import internalAPI from "../../../service/internal.services";
import { KeyboardEvent } from "react";

interface ILoginPayload {
    email: string
    password: string
}

export default function Login() {

    const { register, handleSubmit } = useForm<ILoginPayload>()
    const navigate = useNavigate()

    const submit:SubmitHandler<ILoginPayload> = async (data) => {
        const res = await internalAPI.post("/login", data)
        
        if(res.success) {
            navigate("/login")
            return
        }
        res.showMessage()
    }

    const handleSubmitOnEnter = (e:KeyboardEvent<HTMLDivElement>) => {
        if(e.key === "Enter") {
            handleSubmit(submit)
        }
    }

    return (
        <LoginContainer onSubmit={handleSubmit(submit)}>

            <Stack spacing={3}>
                <Typography
                    variant="h2"
                    color="primary.main"
                    textAlign="center"
                >
                    KanBom
                </Typography>
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