import { Box, Typography } from "@mui/material";

export default function LogoTitle() {
    return(
        <Box sx={{
            display: "flex",
            gap: 1,
            alignItems: "center",
            justifyContent: "center"
        }}>
            <Box 
                component="img" 
                src="/logo.svg"
                sx={{
                    height: "2rem"
                }}
            />
            <Typography 
                fontWeight={700}
                fontSize="2rem"
                color="inherit"
            >KanBom</Typography>
        </Box>
    )
}