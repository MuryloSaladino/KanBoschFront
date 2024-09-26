import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <Box
            position="fixed"
            p={'15px'}
            bgcolor={'#0D3044'}
            width={'100vw'}
            justifyContent={"space-between"}
            display={"flex"}
            flexDirection={"row"}
            alignItems={"center"}
            zIndex={100000000}
        >
            <Box sx={{height: "4vh"}}>
                <img src="/logo.svg" alt="Logo" style={{ height: '100%' }} />
            </Box>
            <Typography variant="h5" color="white">KanBom</Typography>
            <Button color="success">
                <Link to={'/login'} style={{ textDecoration: "none", color: "#B9E170", fontWeight: "bold" }}>
                    Login
                </Link>
            </Button>
            {/* <Avatar sx={{ bgcolor: "#F18F01", cursor: "pointer" }}>IJ</Avatar> */}
        </Box>
    )
}