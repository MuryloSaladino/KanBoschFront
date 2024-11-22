import { useContext } from "react";
import Header from "../../../components/Header";
import useWorkspacesByUser from "./hooks/useWorkspacesByUser";
import { UserContext } from "../../../providers/UserProvider";

export default function Home() {

    const { user } = useContext(UserContext)
    const {  } = useWorkspacesByUser(user?.id)

    return(
        <>
            <Header/>


        </>
    )
}