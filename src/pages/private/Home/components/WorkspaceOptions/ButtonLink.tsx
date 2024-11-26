import { Button, styled } from "@mui/material";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface IButtonLinkProps {
    children?: ReactNode
    icon?: ReactNode
    to: string
}

export default function ButtonLink({ children, icon, to }: IButtonLinkProps) {
    return (
        <Link to={to}>
            <StyledButton
                variant="contained"
                size="small"
            >
                { icon }
                { children }
            </StyledButton>
        </Link>
    )
}

const StyledButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.grey["800"],
    
    color: theme.palette.grey["400"],
    fontWeight: 700,
    textTransform: "none",

    display: "flex",
    alignItems: "center",
    gap: 8,

    fontSize: "1.1rem",

    ':hover': {
        backgroundColor: theme.palette.grey["700"]
    },
}))