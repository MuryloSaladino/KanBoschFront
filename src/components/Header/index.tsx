import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Header() {
    return(
        <Box 
            position="fixed" 
            p={'15px'} 
            bgcolor={'white'} 
            width={'100vw'} 
            justifyContent={"space-between"} 
            display={"flex"} 
            flexDirection={"row"}
            alignItems={"center"}
        >
            <Typography variant="h5">KanBom</Typography>
            <Button color="warning">
                <Link to={'/newProject'} style={{textDecoration: "none", color: "orange"}}>
                    New Project
                </Link>
            </Button>
            <Button color="warning">
                <Link to={'/myTeam'} style={{textDecoration: "none", color: "orange"}}>
                    My Teams
                </Link>
            </Button>
            <Box bgcolor={"skyblue"} 
                width={"50px"} 
                height={"50px"} 
                borderRadius={"50px"}
                sx={{ cursor: "pointer"}} 
            />
        </Box>
    )
}