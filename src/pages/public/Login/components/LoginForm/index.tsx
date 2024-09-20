import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Button, FilledInput, FormControl, IconButton, InputAdornment, InputLabel, TextField } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginForm() 
{
    const [ showPwd, setShowPwd ] = useState(false);
    const handleShowPwd = () => setShowPwd((show) => !show);

    function handleSubmit(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
    }

    return (
        <>
            <form onSubmit={handleSubmit} 
                style={
                    {
                        display: "flex", 
                        flexDirection: "column", 
                        width: "50vh",
                        alignItems: "center",
                        marginTop: "50px"
                    }
                }>
                <TextField 
                    id="filled-basic" 
                    label="Email" 
                    variant="filled" 
                    color="warning"
                    sx={{ m: 1, width: '80%'}} 
                    required
                />
                <FormControl 
                    sx={{ m: 1, width: '80%'}} 
                    variant="filled" 
                    color="warning"
                    required
                    
                >
                    <InputLabel htmlFor="filled-adornment-password">
                        Password
                    </InputLabel>
                    <FilledInput
                        id="filled-adornment-password"
                        color="warning"
                        type=
                        {
                            showPwd 
                            ? "text" 
                            : "password"
                        }
                        endAdornment=
                        {
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleShowPwd}
                                    edge="end"
                                >
                                    {
                                        showPwd 
                                        ? <VisibilityOff /> 
                                        : <Visibility />
                                    }
                                </IconButton>
                            </InputAdornment>
                        }
                    ></FilledInput>
                </FormControl>
                <Button color="warning" variant="contained" sx={{margin: "20px"}}>Login</Button>
            </form>
            <Link to={"/register"} style={{color: "white"}}>Not registered? Sign in</Link>
        </>
    )
}