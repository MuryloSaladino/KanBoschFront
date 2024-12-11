import Icon from "@/components/Icon"
import styles from "./styles.module.css"
import { useState } from "react"
import { useWorkspace } from "../../hooks/useWorkspace"

export default function Menu() {
    
    const [open, setOpen] = useState(window.innerWidth > 500)
    const { workspace, loading } = useWorkspace()
    
    return (
        <div className={`${styles.menu} ${open ? styles.open : ""} ${loading ? "loading" : ""}`}>
                        
            
            <div className={styles.close_button}>
                <Icon
                    onClick={() => setOpen(prev => !prev)} 
                    name={open ? "chevron_left" : "chevron_right"}
                />
            </div>
        </div>
    )
}