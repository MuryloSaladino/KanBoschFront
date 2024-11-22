import Header from "../../../components/Header";
import useWorkspaces from "./hooks/useWorkspacesByUser";
import { SMain } from "./styles";
import { Typography } from "@mui/material";

export default function Home() {

    const { workspaces } = useWorkspaces()

    console.log(workspaces);

    return(
        <>
            <Header/>

            <SMain>
                {workspaces.map(workspace => <Typography>{workspace.name}</Typography>)}
            </SMain>
        </>
    )
}