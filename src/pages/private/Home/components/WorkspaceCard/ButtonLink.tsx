import { Button, styled } from "@mui/material";
import { ReactNode } from "react";

interface IButtonLinkProps {
    children?: ReactNode
    icon?: ReactNode
}

export default function ButtonLink({ children, icon }: IButtonLinkProps) {
    return (
        <StyledButton
            variant="contained"
            size="small"
        >
            { icon }
            { children }
        </StyledButton>
    )
}

const StyledButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.grey["800"],
    
    color: theme.palette.grey["400"],
    fontWeight: 700,
    textTransform: "none",

    display: "flex",
    alignItems: "center",

    ':hover': {
        backgroundColor: theme.palette.grey["700"]
    },
}))