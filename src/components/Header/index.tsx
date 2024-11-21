import { Typography } from "@mui/material";
import { SHeader } from "./styles";

export default function Header() {
    return(
        <SHeader>
            <Typography
                color="primary.light"
                variant="h6"
                fontWeight={700}
            >KanBom</Typography>
        </SHeader>
    )
}