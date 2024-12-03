import { MenuItem, Select } from "@mui/material";
import { forwardRef } from "react";
import { IRootInputProps } from "../interfaces";
import InputContainer from "../InputContainer";
import { useFormContext } from "react-hook-form";

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
    ({ options = [], error, label, helperText, id, defaultValue, fieldName }, ref) => {

        const { setValue } = useFormContext();

        return(
            <InputContainer
                error={error}
                helperText={helperText}
                id={id}
            >
                <Select 
                    ref={ref}
                    id={id}
                    label={label}
                    defaultValue={defaultValue}
                    onChange={(e) => {
                        if(fieldName) setValue(fieldName, e.target.value)
                    }}
                >
                    {options.map(option => (
                        <MenuItem value={option.value}>{option.label}</MenuItem>
                    ))}
                </Select>
            </InputContainer>
        )
    }
)

export default InputSelect
