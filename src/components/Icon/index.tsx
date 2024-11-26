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
                            size == "md" ? "1.25rem" : 
                            size == "lg" ? "1.5rem" : "inherit"
            }}
        >
            { name }
        </span>
    )
}