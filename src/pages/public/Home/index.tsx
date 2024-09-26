import { Button, Stack, Typography, useMediaQuery } from "@mui/material";
import { StyledBg, StyledCard, StyledMainBox, StyledRow, StyledSecBox, StyledSquareBox, StyledTextBox } from "./styles";
import { Link } from "react-router-dom";
import Header from "./components/Header";

export default function Home() {
    const isMobile = useMediaQuery('(max-width:600px)');

    return (
        <StyledBg>
            <Header />
            <StyledMainBox style={{ flexDirection: isMobile ? 'column' : 'row' }}>
                <StyledTextBox>
                    <Typography variant={isMobile? 'h4' : 'h3'}>KanBom
                        Transformando Ideias em ações, navegando pelo seu fluxo.</Typography>
                    <Link to={"/login"}><Button color="primary" variant="contained" sx={{margin: "20px"}}>Começar</Button></Link>
                </StyledTextBox>
                <StyledSquareBox style={{display: isMobile? 'none' : 'block'}}>
                    <img src="/Boxes.png" style={{height: "40vh"}}/>
                </StyledSquareBox>
            </StyledMainBox>
            <StyledSecBox>
                <StyledRow>
                    <img src="/pranchetas.png" style={{height: "40px"}}/>
                    <img src="/kanban.png" style={{height: "40px"}}/>
                    <img src="/pencil.png" style={{height: "40px"}}/>
                    <img src="/checkbox.png" style={{height: "40px"}}/>
                </StyledRow>
                <Typography variant={isMobile? 'h5' : 'h4'}>Organize suas tarefas da maneira que preferir.</Typography>
                <Stack flexDirection="row" gap={3}>
                    <StyledCard ballColor="#0097b2"/>
                    <StyledCard ballColor="#ff914d"/>
                    <StyledCard ballColor="#0d3044"/>
                    <StyledCard ballColor="#7ed957"/>
                </Stack>
            </StyledSecBox>
        </StyledBg>
    )
}