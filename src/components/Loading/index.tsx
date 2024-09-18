import { styled } from "@mui/material";
import { Box } from "@mui/system";

export const LoadingIcon = styled(Box)(({ theme }) => ({
    aspectRatio: "1/1",
    width: 50,
    borderRadius: "50%",
    border: "8px solid " + theme.palette.primary.main,
    animation: "loading-shape 0.8s infinite linear alternate, loading-rotation 1.6s infinite linear" 
}))

export const LoadingPage = () => (
    <Box sx={{ 
        width: "100vw", 
        height: "100vh", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center" 
    }}>
        <LoadingIcon/>
    </Box>
)