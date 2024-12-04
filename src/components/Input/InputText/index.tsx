import { forwardRef } from "react"
import styles from "../styles.module.css"
import { IRootInputProps } from "../interfaces"
import InputContainer from "../InputContainer"
import Icon from "@/components/Icon"

export interface IInputTextProps extends IRootInputProps {
    type?: "text" | "email"
    iconName?: string
}

const InputText = forwardRef<HTMLInputElement, IInputTextProps>(
    ({ error, type = "text", label, helperText, id, iconName, fieldName, ...props }, ref) => 
{
    return (
        <InputContainer
            label={label}
            error={error}
            helperText={helperText}
            id={id}
        >
            {iconName &&
                <Icon name={iconName} className={styles.input_icon}/>
            }

            <input
                ref={ref}
                {...props}
                id={id}
                type={type}
                className={`${styles.input} ${error ? styles.error : ""}`}
                placeholder=" "
            />
        </InputContainer>
    )
})

export default InputText
