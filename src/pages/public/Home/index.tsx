import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import PageEnveloper from "../../../components/PageEnveloper";
import { StyledMainBox, StyledTextBox } from "./styles";
import { Link } from "react-router-dom";

export default function Home() {
    const isMobile = useMediaQuery('(max-width:600px)');

    return (
        <PageEnveloper>
            <StyledMainBox style={{flexDirection: isMobile? 'column' : 'row'}}>
                <StyledTextBox>
                    <Typography variant="h3">KanBom
                Transformando Ideias em ações, navegando pelo seu fluxo.</Typography>
                </StyledTextBox>
                <StyledTextBox>{/* block | none */}
                    <Button color="primary" variant="contained"><Link to={"/login"}>Entrar</Link></Button>
                </StyledTextBox>
            </StyledMainBox>
        </PageEnveloper>
    )
}