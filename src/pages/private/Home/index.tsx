import { v4 as uuid } from "uuid";
import WorkspaceCard from "./components/WorkspaceCard";
import useWorkspaces from "./hooks/useWorkspacesByUser";
import { SMain } from "./styles";
import { Container, Stack, Typography } from "@mui/material";
import { CreateBoardProvider } from "./providers/CreateBoardProvider";
import CreateBoardModal from "./components/CreateBoardModal";
import Header from "@/components/Header";

export default function Home() {

    const { workspaces } = useWorkspaces()

    return(
        <CreateBoardProvider>
            <CreateBoardModal/>

            <Header/>

            <SMain>
                <Container maxWidth="md">
                    <Typography 
                        variant="h6"
                        fontWeight={700}
                    >Your Workspaces</Typography>

                    <Stack mt={5} spacing={3}>
                        {workspaces.map(workspace => (
                            <WorkspaceCard
                                key={uuid()}
                                workspace={workspace}
                            />
                        ))}
                    </Stack>
                </Container>
            </SMain>
        </CreateBoardProvider>
    )
}