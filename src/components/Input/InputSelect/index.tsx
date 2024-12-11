import { MenuItem, Select, styled } from "@mui/material";
import { forwardRef } from "react";
import { IRootInputProps } from "../interfaces";
import InputContainer from "../InputContainer";
import { useFormContext } from "react-hook-form";
import { v4 as uuid } from "uuid";

type Option = { 
    label: string
    value: string | number
}

export interface IInputSelectProps extends IRootInputProps {
    type: "select"
    options?: Option[]
    defaultValue?: string | number
}

const InputSelect = forwardRef<JSX.Element, IInputSelectProps>(
    ({ options = [], error, helperText, id, defaultValue = "", fieldName }, ref) => {

        const { setValue } = useFormContext();

        return(
            <InputContainer
                error={error}
                helperText={helperText}
                id={id}
            >
                <SSelect 
                    ref={ref}
                    id={id}
                    defaultValue={defaultValue}
                    fullWidth
                    error={error}
                    onChange={(e) => {
                        if(fieldName) setValue(fieldName, e.target.value)
                    }}
                    
                >
                    {options.map(option => (
                        <MenuItem 
                            key={uuid()} 
                            value={option.value}
                        >
                            {option.label}
                        </MenuItem>
                    ))}
                </SSelect>
            </InputContainer>
        )
    }
)

const SSelect = styled(Select)<{ error?: boolean }>(({ error }) => ({
    width: "100%",
    height: "100%",

    "> div": {
        height: "100%",
        borderRadius: 0,
        borderColor: error ? "var(--error-light)" : "var(--gray-200)",
    }
}))

export default InputSelect
