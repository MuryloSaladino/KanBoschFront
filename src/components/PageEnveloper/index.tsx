import { ReactNode } from "react";
import Header from "../Header";
import { StyledMain } from "./styles";
import { Container, ThemeProvider } from "@mui/material";
import appTheme from "../../styles/theme";

interface IPageEnveloperProps {
    children?: ReactNode;
    noHeader?: boolean;
}

export default function PageEnveloper({ children, noHeader }: IPageEnveloperProps) {
    return(
        <ThemeProvider theme={appTheme}>
            { !noHeader && <Header/> }

            <StyledMain>
                <Container maxWidth="xl">
                    { children }
                </Container>
            </StyledMain>
        </ThemeProvider>
    )
}