import { Typography } from "@mui/material"
import { IBoard } from "../../../../../interfaces/boards.interfaces"
import { SBox } from "./styles"

interface IBoardCardProps {
    board: IBoard
}

export default function BoardCard({ board }: IBoardCardProps) {
    return(
        // <BlockLink to="">
            <SBox bgcolor={board.color}>
                <Typography 
                    fontSize="1.25rem"
                    position="absolute"
                    zIndex={2} top={20} left={0} right={0} m="auto"
                    textAlign="center"
                >
                    { board.name }
                </Typography>
            </SBox>
        // </BlockLink>
    )
}

