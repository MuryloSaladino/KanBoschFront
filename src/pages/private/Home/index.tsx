import CreateBoardModal from "./components/CreateBoardModal";
import Header from "@/components/Header";
import useWorkspaces from "./hooks/useWorkspaces";

export default function Home() {

    const {  } = useWorkspaces()

    return(
        <>
            <CreateBoardModal/>

            <Header/>


        </>
    )
}