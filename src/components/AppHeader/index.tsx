import { Avatar, Box, Toolbar, Typography } from "@mui/material";
import NotificationsIcon from '@mui/icons-material/Notifications';
import { CircleButton } from "./styles";

interface IAppHeaderProps {
    location?: string;
}

export default function AppHeader({ location }:IAppHeaderProps) {

    return(
        <Box width="100%" border="3px solid #2C2B4C">
            <Toolbar sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                p: 2,
            }}>
                <Typography variant="h4" color="#BEC1DC">{ location || "KanBom" }</Typography>

                <Box display="flex" gap={2} alignItems="center">
                    <CircleButton>
                        <NotificationsIcon sx={{ height: "100%", color: "#BEC1DC" }}/>
                    </CircleButton>
                    <CircleButton>
                        <Avatar src="/avatar.svg"/>
                    </CircleButton>
                </Box>
            </Toolbar>
        </Box>
    )
}