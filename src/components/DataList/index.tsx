import { useState } from "react"
import { v4 as uuid } from "uuid"

type ListMode = "cards" | "table"

interface IListProps<T> {
    items: T[]
    titleKey: keyof T
    initialMode?: ListMode
    // color: string | (() => string) | keyof T 
}

const DataList = <T,>({ 
    items,
    titleKey,
    initialMode = "cards" 
}: IListProps<T>) => {

    const [mode, setMode] = useState<ListMode>(initialMode)
    const DataContainer = mode == "cards" ? "ul" : "table"

    return(
        <div>
            

            <DataContainer>
                {items.map(item => {
                    
                    
                    return (
                        <li
                            key={uuid()}
                        >
                            {String(item[titleKey])}
                        </li>
                    )
                })}
            </DataContainer>
        </div>
    )
}

export default DataList
