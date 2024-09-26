import { Avatar, Box, Toolbar, Tooltip, Typography } from "@mui/material";
import NotificationsIcon from '@mui/icons-material/Notifications';
import { CircleButton } from "./styles";
import { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";

interface IAppHeaderProps {
    location?: string;
}

export default function AppHeader({ location }:IAppHeaderProps) {

    const { user } = useContext(UserContext)

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
                    <Tooltip title="Notifications">
                        <CircleButton>
                            <NotificationsIcon sx={{ height: "100%", color: "#BEC1DC" }}/>
                        </CircleButton>
                    </Tooltip>
                    <Tooltip title={`${user?.details.firstName} ${user?.details.lastName}`}>
                        <CircleButton>
                            <Avatar src="/avatar.svg"/>
                        </CircleButton>
                    </Tooltip>
                </Box>
            </Toolbar>
        </Box>
    )
}