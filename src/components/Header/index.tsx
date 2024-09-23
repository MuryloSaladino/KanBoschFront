import { Avatar, Box, Button, Typography } from "@mui/material";
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
        >
            <Typography variant="h5" color="white">KanBom</Typography>
            <Button color="success">
                <Link to={'/newProject'} style={{ textDecoration: "none", color: "#B9E170", fontWeight: "bold" }}>
                    New Project
                </Link>
            </Button>
            <Button color="success">
                <Link to={'/teams'} style={{ textDecoration: "none", color: "#B9E170", fontWeight: "bold" }}>
                    My Teams
                </Link>
            </Button>
            <Avatar sx={{ bgcolor: "#F18F01", cursor: "pointer" }}>IJ</Avatar>
        </Box>
    )
}