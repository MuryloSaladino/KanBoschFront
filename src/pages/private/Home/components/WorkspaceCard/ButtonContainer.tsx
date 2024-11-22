import { Stack } from "@mui/material";
import { LinkButton } from "./styles";
import { Link } from "react-router-dom";

export default function ButtonContainer() {

    return(
        <Stack 
            direction="row"
            alignItems="center"
            justifyContent="end"
            gap={2}
        >
            <Link to="">
                <LinkButton 
                    
                >Boards</LinkButton>
            </Link>

            <Link to="">
                <LinkButton 
                    variant="contained"
                    size="small"
                >Members</LinkButton>
            </Link>

            <Link to="">
                <LinkButton 
                    variant="contained"
                    size="small"
                >Settings</LinkButton>
            </Link>
        </Stack>
    )
}