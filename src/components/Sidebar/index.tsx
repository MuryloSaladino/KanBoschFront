import { Box, Button, Stack, styled } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import { ReactNode, useContext } from "react";
import TaskIcon from '@mui/icons-material/Task';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import GroupsIcon from '@mui/icons-material/Groups';
import LogoTitle from "../LogoTitle";
import { UserContext } from "../../providers/UserProvider";
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from "react-router-dom";

export default function Sidebar() {

    const { logout } = useContext(UserContext)

    return(
        <Box width="100%" border="3px solid #2C2B4C" height="100%" display="flex" gap={3} flexDirection="column" alignItems="center" p={3} color="#BEC1DC">
            <LogoTitle/>

            <Stack gap={3} width="100%">
                <MenuItem><HomeIcon/> Dashboard</MenuItem>
                <MenuItem><FolderCopyIcon/> Projects</MenuItem>
                <MenuItem><GroupsIcon/> Teams</MenuItem>
                <MenuItem><TaskIcon/> Tasks</MenuItem>
            </Stack>

            <Box mt="auto" width="100%">
                <LogoutLink to="/login">
                    <MenuItem onClick={() => logout}>
                        <LogoutIcon/> Logout
                    </MenuItem>
                </LogoutLink>
            </Box>
        </Box>
    )
}

const LogoutLink = styled(Link)(() => ({
    ':hover': {
        textDecoration: "none",
        color: "inherit"
    }
}))

function MenuItem({children, onClick}:{children:ReactNode, onClick?:()=>void}) {
    return(
        <Button onClick={onClick} sx={{ display: "flex", gap: 3, alignItems: "center", justifyContent: "start", color: "#BEC1DC", width: "100%", fontSize: "1.25rem" }}>
            { children }
        </Button>
    )
}