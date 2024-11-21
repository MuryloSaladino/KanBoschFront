import { Button, styled } from "@mui/material";

export const LoginContainer = styled("form")(() => ({
    width: "100%",
    maxWidth: 350,
    margin: "20vh auto",

    display: "flex",
    flexDirection: "column",
    gap: 40,
}))

export const SubmitButton = styled(Button)(() => ({
    width: "max-content",
    alignSelf: "end",
}))