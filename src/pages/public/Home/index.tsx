import { Button, Typography, useMediaQuery } from "@mui/material";
import { StyledMainBox, StyledTextBox } from "./styles";
import { Link } from "react-router-dom";
import Header from "../../../components/Header";

export default function Home() {
    const isMobile = useMediaQuery('(max-width:600px)');

    return (
        <>
            <Header />
            <StyledMainBox style={{ flexDirection: isMobile ? 'column' : 'row' }}>
                <StyledTextBox>
                    <Typography variant={isMobile? 'h4' : 'h3'}>KanBom
                        Transformando Ideias em ações, navegando pelo seu fluxo.</Typography>
                </StyledTextBox>
                <StyledTextBox>{/* block | none */}
                    <Button color="primary" variant="contained"><Link to={"/login"}>Entrar</Link></Button>
                </StyledTextBox>
            </StyledMainBox>
        </>
    )
}