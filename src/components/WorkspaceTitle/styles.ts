import { styled } from "@mui/material";

interface ILetterBoxProps {
    size: "sm" | "md" | "lg"
    color: string
}

export const LetterBox = styled("div")<ILetterBoxProps>(({ theme, size, color }) => ({
    aspectRatio: "1/1",
    width: (size == "sm" ? 1.5 : size == "md" ? 2.5 : 3.5) + "rem",
    backgroundColor: color,
    borderRadius: 2,

    color: theme.palette.grey["300"],
    fontSize: (size == "sm" ? 1 : size == "md" ? 1.5 : 2) + "rem",
    
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}))