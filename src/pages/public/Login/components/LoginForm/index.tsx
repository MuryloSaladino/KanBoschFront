import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import { useState } from "react";

export default function LoginForm() 
{

    const [ showPwd, setShowPwd ] = useState(false);

    const handleShowPwd = () => setShowPwd((show) => !show);


    return (
        <Box 
            alignItems={"center"} 
            bgcolor={"white"} 
            flexDirection={"column"}
            margin={"50px"}
            padding={"20px"}
            >
            <TextField id="outlined-basic" label="Email" variant="outlined" sx={{ m: 1, width: '50vh' }}/>
            <FormControl sx={{ m: 1, width: '50vh' }} variant="outlined" margin="normal">
                <InputLabel htmlFor="outlined-adornment-password">
                    Password
                </InputLabel>
                <OutlinedInput
                    id="outlined-adornment-password"
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
                                edge="end">
                                    {
                                        showPwd 
                                        ? <VisibilityOff /> 
                                        : <Visibility />
                                    }
                            </IconButton>
                        </InputAdornment>
                    }
                ></OutlinedInput>
            </FormControl>
        </Box>
    )
}