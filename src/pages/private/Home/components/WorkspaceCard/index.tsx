import { Grid2 } from "@mui/material"
import { IWorkspace } from "../../../../../interfaces/workspaces.interfaces"
import WorkspaceTitle from "../../../../../components/WorkspaceTitle"
import ButtonContainer from "./ButtonContainer"

interface IWorkspaceCardProps {
    workspace: IWorkspace
}

export default function WorkspaceCard({ workspace }:IWorkspaceCardProps) {

    return(
        <Grid2 container spacing={3}>
            <Grid2 size={{ sm: 12, md: 4 }}>
                <WorkspaceTitle color="#791d73" name={workspace.name}/>
            </Grid2>

            <Grid2 size={{ sm: 12, md: 8 }}>
                <ButtonContainer/>
            </Grid2>

            <Grid2>

            </Grid2>
        </Grid2>
    )
}
