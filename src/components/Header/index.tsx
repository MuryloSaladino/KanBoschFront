import { Box, Typography } from "@mui/material";

export default function Header() {
    return(
        <Box position="fixed" p={'10px'} bgcolor={'white'} width={'100vw'}>
            <Typography variant="h4">KanBom</Typography>
        </Box>
    )
}