import { Box, styled } from "@mui/material";

export const StyledMain = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    minHeight: "100vh",
    padding: "50px 10px"
}))