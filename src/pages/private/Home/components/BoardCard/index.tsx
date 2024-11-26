import { styled, Typography } from "@mui/material"
import { IBoard } from "../../../../../interfaces/boards.interfaces"
import BlockLink from "../../../../../components/BlockLink"

interface IBoardCardProps {
    board: IBoard
}

export default function BoardCard({ board }: IBoardCardProps) {
    return(
        <BlockLink to="">
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
        </BlockLink>
    )
}

const SBox = styled("div")<{ bgcolor: string }>(({ bgcolor }) => ({
    width: "100%",
    height: 100,

    position: "relative",
    paddingTop: 10,

    overflow: "hidden",
    
    "::before": {
        content: "''",
        position: "absolute",
        top: 0,
        left: 0,

        width: "100%",
        height: "100%",

        backgroundColor: bgcolor,
        filter: "brightness(0.6)",
        borderRadius: 5,
        zIndex: 1
    }
}))
