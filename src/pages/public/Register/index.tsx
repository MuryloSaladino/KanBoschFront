import { SubmitHandler, useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import internalAPI from "../../../service/internal.services"
import { KeyboardEvent, useState } from "react"
import { RegisterContainer, SubmitButton } from "./styles"
import { Stack, TextField, Typography } from "@mui/material"
import { toast } from "react-toastify"
import { zodResolver } from "@hookform/resolvers/zod"
import { IRegisterPayload, registerSchema } from "./schema"
import { DatePicker } from "@mui/x-date-pickers"
import dayjs from "dayjs"

export default function Register() {

    const {
        register,
        handleSubmit,
        formState: { errors }, 
        setValue,
    } = useForm<IRegisterPayload>({
        resolver: zodResolver(registerSchema),
        mode: "onBlur"
    })
    const [birthdate, setBirthdate] = useState(dayjs())
    const navigate = useNavigate()

    const submit:SubmitHandler<IRegisterPayload> = async (data) => {
        const res = await internalAPI.post("/users", data)
        
        if(res.success) {
            navigate("/home")
            toast.success("Account created! Login now to start managing your projects!")
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
        <RegisterContainer 
            onSubmit={handleSubmit(submit)} 
            noValidate
        >
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
                >Create account</Typography>
            </Stack>
            
            <Stack spacing={3}>
                <Typography variant="body1" color="gray" mt={2}>Account Details: </Typography>
                <TextField
                    label="email"
                    {...register("email")}
                    onKeyDown={handleSubmitOnEnter}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                />
                <TextField
                    label="password"
                    type="password"
                    {...register("password")}
                    onKeyDown={handleSubmitOnEnter}
                    error={!!errors.password}
                    helperText={errors.password?.message}
                />
                <TextField
                    label="confirm password"
                    type="password"
                    {...register("confirm")}
                    onKeyDown={handleSubmitOnEnter}
                    error={!!errors.confirm}
                    helperText={errors.confirm?.message}
                />
                <Typography variant="body1" color="gray" mt={2}>Personal Details: </Typography>
                <TextField
                    label="first name"
                    {...register("details.firstName")}
                    onKeyDown={handleSubmitOnEnter}
                    error={!!errors.details?.firstName}
                    helperText={errors.details?.firstName?.message}
                />
                <TextField
                    label="last name"
                    {...register("details.lastName")}
                    onKeyDown={handleSubmitOnEnter}
                    error={!!errors.details?.lastName}
                    helperText={errors.details?.lastName?.message}
                />
                <DatePicker
                    label="Birthdate"
                    value={birthdate}
                    onChange={(newValue) => {
                        if(newValue) {
                            setBirthdate(newValue || dayjs())
                            setValue("details.birthdate", newValue.format("YYYY-MM-DD"))
                        }
                    }}
                />
            </Stack>

            <SubmitButton
                type="submit"
                variant="contained"
            >register</SubmitButton>

            <Typography variant="body1" textAlign="center">
                Already know this place? <Link to="/login">Login</Link> to your account.
            </Typography>
        </RegisterContainer>
    )
}