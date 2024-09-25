import { Box, styled } from "@mui/material";

export const StyledMainBox = styled(Box)(() => ({
    display: "flex",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    gap: "50px",
    padding: "50px",
    backgroundImage: 'url("/Kanbom.png")'
}))

export const StyledTextBox = styled(Box)(() => ({
    maxWidth: "50vh",
    textAlign: "center"
}))