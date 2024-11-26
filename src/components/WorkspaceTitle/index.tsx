import { Stack, Typography } from "@mui/material"
import { LetterBox } from "./styles"

interface IWorkspaceTitleProps {
    size?: "sm" | "md" | "lg"
    color: string
    name: string
}

export default function WorkspaceTitle({ size = "md", color, name }: IWorkspaceTitleProps) {

    return(
        <Stack direction="row" alignItems="center" gap={2}>
            <LetterBox 
                size={size}
                color={color}
            >
                {name[0].toUpperCase()}
            </LetterBox>
            
            <Typography
                fontSize={(size == "sm" ? 0.5 : size == "md" ? 0.8 : 1.25) + "rem"}
                fontWeight={600}
            >
                { name }
            </Typography>
        </Stack>
    )
}
