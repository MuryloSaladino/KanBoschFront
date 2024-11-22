import { Button, styled } from "@mui/material";
import { ReactNode } from "react";

interface IButtonLinkProps {
    children?: ReactNode
    icon?: 
}

export default function ButtonLink({ children }: IButtonLinkProps) {
    return (
        <StyledButton
            variant="contained"
            size="small"
        >
            { children }
        </StyledButton>
    )
}

const StyledButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.grey["800"],
    
    color: theme.palette.grey["400"],
    fontWeight: 700,
    textTransform: "none",

    ':hover': {
        backgroundColor: theme.palette.grey["700"]
    },
}))