import { Typography } from "@mui/material"

interface IIConProps {
    name: string
    size?: "sm" | "md" | "lg"
}

export default function Icon({ name, size }: IIConProps) {
    return(
        <span 
            className="material-symbols-rounded"
            // fontSize={
            //     size == "sm" ? "0.75rem" : 
            //     size == "md" ? "1rem" : 
            //     size == "lg" ? "1.5rem" : "inherit"
            // }
        >
            { name }
        </span>
    )
}