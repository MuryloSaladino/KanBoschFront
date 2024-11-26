import { styled } from "@mui/material";

export const SDialog = styled("div")(({ theme }) => ({
    width: "95%",
    maxWidth: 500,
    margin: "20vh auto",

    backgroundColor: theme.palette.grey[800],
    padding: "30px 15px",
    borderRadius: 5,
}))