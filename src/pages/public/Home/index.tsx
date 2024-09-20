import { Typography } from "@mui/material";
import PageEnveloper from "../../../components/PageEnveloper";

export default function Home() {

    return (
        <PageEnveloper noHeader={false}>
            <Typography variant="h2" sx={{marginTop: "5vh"}}>Home</Typography>
        </PageEnveloper>
    )
}