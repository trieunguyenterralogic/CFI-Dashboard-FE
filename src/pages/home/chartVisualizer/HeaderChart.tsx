// ** MUI Imports
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

// ** MUI x-date-pickers Imports
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { SingleInputDateRangeField } from "@mui/x-date-pickers-pro/SingleInputDateRangeField";

// ** Dayjs Import
import dayjs from "dayjs";

// ** Constant Imports
import { optionSelectModalChart } from "@constants/home";

const HeaderChart = () => {
    return (
        <Box className="flex items-center justify-between mt-4">
            <Box width={230}>
                <FormControl fullWidth>
                    <InputLabel sx={{ fontSize: 17, fontWeight: 500 }}>
                        Select Model
                    </InputLabel>
                    <Select
                        color="primary"
                        label="Select Model"
                        sx={{
                            "&.MuiInputBase-root": {
                                background: "#FFFFFF",
                                height: 45,
                            },
                            "& .MuiSelect-select": {
                                paddingTop: 0,
                                paddingBottom: 0,
                            },
                            "&.MuiInputBase-colorPrimary:hover .MuiOutlinedInput-notchedOutline":
                                {
                                    borderColor: "#00BCEB",
                                },
                        }}
                        defaultValue={optionSelectModalChart[0].value}
                    >
                        {optionSelectModalChart.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.lable}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>

            <Box>
                <FormControl fullWidth>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer
                            components={["SingleInputDateRangeField"]}
                            sx={{ paddingTop: 0 }}
                        >
                            <DateRangePicker
                                defaultValue={[dayjs(), dayjs()]}
                                format="YYYY-MM-DD"
                                sx={{
                                    "& .MuiInputBase-input": {
                                        paddingTop: 0,
                                        paddingBottom: 0,
                                        height: 45,
                                    },
                                    "& .MuiInputBase-root:hover .MuiOutlinedInput-notchedOutline":
                                        {
                                            borderColor: "#00BCEB",
                                        },
                                }}
                                calendars={1}
                                slots={{ field: SingleInputDateRangeField }}
                            />
                        </DemoContainer>
                    </LocalizationProvider>
                </FormControl>
            </Box>
        </Box>
    );
};

export default HeaderChart;
