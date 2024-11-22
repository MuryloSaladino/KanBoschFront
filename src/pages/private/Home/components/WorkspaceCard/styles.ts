import { Button, styled } from "@mui/material";

export const LinkButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.grey["800"],
    
    color: theme.palette.grey["400"],
    fontWeight: 700,
    textTransform: "none",

    ':hover': {
        backgroundColor: theme.palette.grey["700"]
    },
}))