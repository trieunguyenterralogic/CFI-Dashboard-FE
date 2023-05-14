// ** React Imports
import { Ref, forwardRef } from "react";

// ** MUI Imports
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import MuiSelect, { SelectProps } from "@mui/material/Select";

// ** Icon Imports
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

// ** Styled Import
import { styled } from "@mui/material";

// ** Type Imports
import { CustomSelectProps } from "./types";

// ** Customize style Mui Select
const MuiSelectStyle = styled(MuiSelect)<SelectProps>(() => {
    return {
        "&.MuiInputBase-root": {
            background: "#FFFFFF",
            height: 40,
        },
        "& .MuiSelect-select": {
            paddingTop: 0,
            paddingBottom: 0,
        },
        "&.MuiInputBase-colorPrimary:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#00BCEB",
        },
    };
});

const Select = forwardRef((props: CustomSelectProps, ref: Ref<any>) => {
    // ** Props
    const { placeholder, fullWidth, width, options, onClear, value } = props;

    return (
        <FormControl fullWidth={fullWidth} sx={{ width }}>
            <MuiSelectStyle
                ref={ref}
                {...props}
                displayEmpty
                sx={{
                    "& .MuiSelect-iconOutlined": {
                        display: value ? "none" : "",
                    },
                }}
                renderValue={(val) =>
                    val ? (
                        <>{val}</>
                    ) : (
                        <Typography variant="placeholder">
                            {placeholder}
                        </Typography>
                    )
                }
                endAdornment={
                    <IconButton
                        sx={{
                            display: value ? "" : "none",
                            marginRight: "-0.5rem",
                        }}
                        onClick={onClear}
                    >
                        <HighlightOffIcon fontSize="small" />
                    </IconButton>
                }
            >
                {options.map((option) => {
                    return (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    );
                })}
            </MuiSelectStyle>
        </FormControl>
    );
});

Select.defaultProps = {
    options: [],
    fullWidth: false,
    placeholder: "Search",
};

export default Select;
