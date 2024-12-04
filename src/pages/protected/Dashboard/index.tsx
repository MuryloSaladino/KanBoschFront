import { Box } from "@mui/material";
import AppHeader from "../../../components/AppHeader";
import Sidebar from "../../../components/Sidebar";

export default function Dashboard() {

    return(
        <>
            <Box display="flex" minHeight="100vh" bgcolor="background.paper" width="100%">
                <Box width={300}>
                    <Sidebar/>
                </Box>
                <Box width="100%">
                    <AppHeader location="Dashboard"/>
                </Box>
            </Box>
        </>
    )
}