import Header from "../../../components/Header";
import useWorkspaces from "./hooks/useWorkspacesByUser";
import { SMain } from "./styles";
import { Container, Stack, Typography } from "@mui/material";

export default function Home() {

    const { workspaces } = useWorkspaces()

    return(
        <>
            <Header/>

            <SMain>
                <Container>
                    <Typography 
                        variant="h5"
                    >YOUR WORKSPACES</Typography>

                    <Stack>
                        {workspaces.map(workspace => <Typography>{workspace.name}</Typography>)}
                    </Stack>
                </Container>
            </SMain>
        </>
    )
}