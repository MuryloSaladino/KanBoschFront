import { AppBar, Avatar, Box, Toolbar, Typography } from "@mui/material";
import NotificationsIcon from '@mui/icons-material/Notifications';
import { CircleButton } from "./styles";

interface IAppHeaderProps {
    location?: string;
}

export default function AppHeader({ location }:IAppHeaderProps) {

    return(
        <AppBar>
            <Toolbar sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                p: 4
            }}>
                <Typography variant="h3">{ location || "KanBom" }</Typography>

                <Box display="flex" gap={2} alignItems="center">
                    <CircleButton>
                        <NotificationsIcon/>
                    </CircleButton>
                    <CircleButton>
                        <Avatar src="/avatar.svg"/>
                    </CircleButton>
                </Box>
            </Toolbar>
        </AppBar>
    )
}