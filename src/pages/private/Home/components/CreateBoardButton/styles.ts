import { styled } from "@mui/material";

export const SBox = styled("div")(({ theme }) => ({
    width: "100%",
    height: "100%",

    borderRadius: 5,
    backgroundColor: theme.palette.grey[800],

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    transition: "0.2s",
    cursor: "pointer",

    ":hover": {
        backgroundColor: theme.palette.grey[700],
    }
}))