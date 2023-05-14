import { SelectProps } from "@mui/material/Select";

export type CustomSelectProps = SelectProps & {
    placeholder?: string,
    options: Array<any>,
    width?: number,
    fullWidth?: boolean,
    onClear?: () => void
}