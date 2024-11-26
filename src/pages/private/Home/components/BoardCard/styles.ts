import { styled } from "@mui/material";

export const SBox = styled("div")<{ bgcolor: string }>(({ bgcolor }) => ({
    width: "100%",
    height: 100,

    position: "relative",
    paddingTop: 10,

    overflow: "hidden",
    
    "::before": {
        content: "''",
        position: "absolute",
        top: 0,
        left: 0,

        width: "100%",
        height: "100%",

        backgroundColor: bgcolor,
        filter: "brightness(0.6)",
        borderRadius: 5,
        zIndex: 1
    }
}))
