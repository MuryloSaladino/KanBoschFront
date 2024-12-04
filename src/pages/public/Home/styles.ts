import { Box, styled } from "@mui/material";

export const StyledMainBox = styled(Box)(() => ({
    display: "flex",
    color: "white",
    alignItems: "center",
    justifyContent: "space-between",
    minHeight: "100vh",
    gap: "10vw",
    padding: "50px",
    backgroundImage: 'url("/Kanbom.png")',
    backgroundPosition: "center"
}))

export const StyledSecBox = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    color: "white",
    minHeight: "80vh",
    gap: "10vw",
    padding: "50px",
}))

export const StyledTextBox = styled(Box)(() => ({
    minWidth: "40vw",
    alignContent: "center",
    textAlignLast: "center",
    minHeight: "80vh",
    textAlign: "center"
}))

export const StyledSquareBox = styled(Box)(() => ({
    display: "flex",
    minWidth: "40vw",
    alignContent: "center",
    minHeight: "80vh",
    textAlign: "center",
}))

export const StyledRow = styled(Box)(() => ({
    width:'80vw',
    justifyContent:"space-around",
    display:"flex",
    flexDirection:"row",
    alignItems: "center"
}))

export const StyledBg = styled(Box)(() => ({
    backgroundColor:"#0097b2",
}))

export const StyledCard = styled(Box)<{ballColor:string}>(({ballColor}) => ({
    width: 300,
    height: 200,
    borderRadius: 30,
    position: "relative",
    backgroundColor: "#d9d9d9",
    transition: "0.3s",

    '::after': {
        content: "''",
        width: 50,
        height: 50,
        borderRadius: "50%",
        position: "absolute",
        top: 15,
        left: 15,
        backgroundColor: ballColor
    },

    ':hover': {
        transform: "rotate(-25deg) translateY(30px)",
        border: "3px dotted #0d3044"
    }
}))