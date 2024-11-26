import { Stack } from "@mui/material";
import ButtonLink from "./ButtonLink";
import Icon from "../../../../../components/Icon";

export default function ButtonContainer() {

    return(
        <Stack 
            direction="row"
            alignItems="center"
            justifyContent="end"
            gap={2}
        >
            <ButtonLink to="" icon={<Icon name="dashboard"/>}>Boards</ButtonLink>
            <ButtonLink to="" icon={<Icon name="groups"/>}>Members</ButtonLink>
            <ButtonLink to="" icon={<Icon name="settings"/>}>Settings</ButtonLink>
        </Stack>
    )
}