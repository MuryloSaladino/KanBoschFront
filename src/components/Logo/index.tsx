import { Typography } from "@mui/material";

interface ILogoProps {
    variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" 
}

export default function Logo({ variant = "h3" }: ILogoProps) {

    return(
        <Typography
            variant={variant}
            color="primary.main"
            textAlign="center"
            fontWeight={700}
        >
            KanBom
        </Typography>
    )
}