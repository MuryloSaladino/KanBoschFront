import { ReactNode } from "react"
import styles from "../styles.module.css"

export interface IInputContainerProps {
    label?: string
    error?: boolean
    helperText?: string
    children?: ReactNode
    id?: string
    className?: string
}

export default function InputContainer({
    label,
    children,
    error,
    helperText,
    id,
    className,
}: IInputContainerProps) {

    return(
        <div className={`${styles.input_box} ${error ? styles.error : ""}  ${className || ""}`}>
            { children }

            {label &&
                <label
                    htmlFor={id}
                    className={`${styles.label}`}
                >{label}</label>
            }

            {helperText &&
                <span
                    className={`${styles.helper_text}`}
                >{helperText}</span>
            }
        </div>
    )
}