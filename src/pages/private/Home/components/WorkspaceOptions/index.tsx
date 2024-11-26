import { Stack } from "@mui/material";
import Icon from "../../../../../components/Icon";
import ButtonLink from "./ButtonLink";

export default function WorkspaceOptions() {

    return(
        <Stack 
            direction="row"
            alignItems="center"
            justifyContent="end"
            gap={2}
            flexWrap="wrap"
        >
            <ButtonLink to="" icon={<Icon name="dashboard"/>}>Boards</ButtonLink>
            <ButtonLink to="" icon={<Icon name="groups"/>}>Members</ButtonLink>
            <ButtonLink to="" icon={<Icon name="settings"/>}>Settings</ButtonLink>
        </Stack>
    )
}