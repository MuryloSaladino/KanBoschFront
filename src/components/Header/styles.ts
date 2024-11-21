import { styled } from "@mui/material";

export const SHeader = styled("header")(({ theme }) => ({
    width: "100%",
    height: 50,
    
    position: "sticky",
    top: 0,
    left: 0,

    backgroundColor: theme.palette.grey["900"],
    borderBottom: `1px solid ${theme.palette.grey["500"]}`,

    display: "flex",
    alignItems: "center",
    padding: "0 20px",
}))