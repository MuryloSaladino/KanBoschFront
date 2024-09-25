import { Box, Button, Container, Stack, TextField, ThemeProvider } from "@mui/material";
import appTheme from "../../../styles/theme";
import LogoTitle from "../../../components/LogoTitle";
import { SubmitHandler, useForm } from "react-hook-form";
import { registerService } from "../../../service/users";
import { TUserCreation } from "../../../types/user.types.";
import { DatePicker } from "@mui/x-date-pickers";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function Register() {

    const { handleSubmit, register } = useForm<TUserCreation>()
    const [birthdate, setBirthdate] = useState<Dayjs | null>(null)
    const navigate = useNavigate()

    const submit:SubmitHandler<TUserCreation> = async (data) => {
        if(!birthdate) {
            toast.error("Please provide a birthdate")
            return;
        }
        const response = await registerService({ 
            ...data, 
            birthdate: dayjs(birthdate).format("YYYY-MM-DD"),
            profilePicture: null
        })
        
        if(response?.status == 201) {
            navigate("/login")
            toast.success("user created!")
        }
    }

    return (
        <ThemeProvider theme={appTheme}>
            <Container maxWidth="xs">
                <Box 
                    flexDirection="column"
                    position="relative"
                    borderRadius={2}
                    display="flex" 
                    boxShadow={3} 
                    mt="20vh" 
                    gap={7} 
                    p={5}
                >
                    <Box position="absolute" top={30} left={30}>
                        <Link to="/login"><ArrowBackIcon/></Link>
                    </Box>

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

                        <TextField
                            label="confirm password"
                            autoComplete="off"
                            type="password"
                            required
                        />

                        <DatePicker
                            label="birthdate"
                            value={birthdate}
                            onChange={(date) => setBirthdate(date)}
                        />

                        <TextField
                            {...register("firstName")}
                            label="first name"
                            autoComplete="off"
                            required
                        />

                        <TextField
                            {...register("lastName")}
                            label="last name"
                            autoComplete="off"
                            required
                        />

                        <Button
                            type="submit"
                            variant="contained"
                            sx={{ alignSelf: "end", color: "white" }}
                        >Register</Button>
                    </Stack>
                </Box>
            </Container>
        </ThemeProvider>
    )
}