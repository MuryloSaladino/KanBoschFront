import { IconButton, styled } from "@mui/material";

export const CircleButton = styled(IconButton)(({ theme }) => ({
    border: "1px solid " + theme.palette.grey[300],
    borderRadius: "50%",
    padding: 10,
    height: 50,
    width: 50
}))