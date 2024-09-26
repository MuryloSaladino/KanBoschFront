import { Box, Button, Stack } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import { ReactNode } from "react";
import TaskIcon from '@mui/icons-material/Task';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import GroupsIcon from '@mui/icons-material/Groups';
import LogoTitle from "../LogoTitle";

export default function Sidebar() {

    return(
        <Box width="100%" border="3px solid #2C2B4C" height="100%" display="flex" gap={3} flexDirection="column" alignItems="center" p={3} color="#BEC1DC">
            <LogoTitle/>

            <Stack gap={3} width="100%">
                <MenuItem><HomeIcon/> Home</MenuItem>
                <MenuItem><TaskIcon/> Tasks</MenuItem>
                <MenuItem><FolderCopyIcon/> Projects</MenuItem>
                <MenuItem><GroupsIcon/> Teams</MenuItem>
            </Stack>
        </Box>
    )
}

function MenuItem({children}:{children:ReactNode}) {
    return(
        <Button sx={{ display: "flex", gap: 3, alignItems: "center", color: "#BEC1DC", width: "100%", fontSize: "1.25rem" }}>
            { children }
        </Button>
    )
}