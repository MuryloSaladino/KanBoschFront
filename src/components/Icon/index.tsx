interface IIConProps {
    name: string
    size?: "sm" | "md" | "lg"
}

export default function Icon({ name, size }: IIConProps) {
    return(
        <span 
            className="material-symbols-rounded"
            style={{
                fontSize:   size == "sm" ? "1rem" : 
                            size == "md" ? "1.5rem" : 
                            size == "lg" ? "2.5rem" : "inherit",
                userSelect: "none",
            }}
        >
            { name }
        </span>
    )
}