import { useContext } from "react";
import Header from "../../../components/Header";
import useWorkspacesByUser from "./hooks/useWorkspacesByUser";
import { UserContext } from "../../../providers/UserProvider";
import { SMain } from "./styles";
import { Typography } from "@mui/material";

export default function Home() {

    const { user } = useContext(UserContext)
    const { workspaces } = useWorkspacesByUser(user?.id)

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