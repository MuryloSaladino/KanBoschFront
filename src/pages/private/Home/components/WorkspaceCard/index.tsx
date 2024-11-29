import { Grid2 } from "@mui/material"
// import WorkspaceTitle from "../../../../../components/WorkspaceTitle"
import BoardCard from "../BoardCard"
import WorkspaceOptions from "../WorkspaceOptions"
import CreateBoardButton from "../CreateBoardButton"
import { IWorkspace } from "@/interfaces/workspaces.interfaces"

interface IWorkspaceCardProps {
    workspace: IWorkspace
}

export default function WorkspaceCard({ workspace }:IWorkspaceCardProps) {

    return(
        <Grid2 container spacing={3}>
            <Grid2 size={{ sm: 12, md: 4 }}>
                {/* <WorkspaceTitle color="#791d73" name={workspace.name} size="lg" /> */}
            </Grid2>

            <Grid2 size={{ sm: 12, md: 8 }}>
                <WorkspaceOptions/>
            </Grid2>

            <Grid2 size={12} container>
                {workspace.boards?.map(board => (
                    <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
                        <BoardCard board={board} />
                    </Grid2>
                ))}
                <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
                    <CreateBoardButton/>
                </Grid2>
            </Grid2>
        </Grid2>
    )
}
