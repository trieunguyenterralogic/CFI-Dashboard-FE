// ** React Imports
import { useState } from "react";

// ** MUI Imports
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import Typography from "@mui/material/Typography";
import AddBoxIcon from "@mui/icons-material/AddBox";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput, { OutlinedInputProps } from "@mui/material/OutlinedInput";

// ** Component Imports
import Select from "@components/select";

// ** Constant Imports
import { columnsTestCase } from "@constants/home";

// ** Type Imports
import { TestCase } from "@type/home";

// ** Styled Imports
import { styled } from "@mui/material";

// ** Customize style TextArea
const TextArea = styled(OutlinedInput)<OutlinedInputProps>(() => {
    return {
        "&.MuiInputBase-root": {
            padding: 0,
            paddingRight: "10px",
        },
        "& .MuiInputBase-input": {
            padding: "8.5px 0px 8.5px 10px",
        },
    };
});

const TestCaseTable = () => {
    // ** State
    const [testCase, _] = useState<TestCase[]>([
        {
            testCase: "common set up",
            result: "string",
            failureCategory: "string",
            rca: "string",
            ddts: "string",
        },
    ]);

    return (
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead sx={{ background: "#F5FAFF" }}>
                <TableRow>
                    <TableCell style={{ minWidth: 60 }} align="center">
                        <Typography variant="title_table" className="pb-1">
                            #
                        </Typography>
                    </TableCell>
                    {columnsTestCase.map((colum) => {
                        return (
                            <TableCell
                                key={colum.id}
                                style={{
                                    minWidth: colum.minWidth || 200,
                                }}
                                align={colum.align}
                            >
                                <Typography
                                    variant="title_table"
                                    className="pb-1"
                                >
                                    {colum.label}
                                </Typography>
                            </TableCell>
                        );
                    })}
                </TableRow>
            </TableHead>
            <TableBody>
                {testCase.map((summary: TestCase, index) => {
                    const { testCase } = summary;
                    return (
                        <TableRow
                            hover
                            role="checkbox"
                            tabIndex={-1}
                            key={testCase}
                            className="cursor-pointer"
                        >
                            <TableCell align="center">
                                <Typography variant="text">
                                    {index + 1}
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="text_underline">
                                    {testCase}
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Select
                                    options={[10, 20, 30]}
                                    placeholder="Result"
                                    fullWidth
                                />
                            </TableCell>
                            <TableCell>
                                <Select
                                    options={[10, 20, 30]}
                                    placeholder="Image Release"
                                    fullWidth
                                />
                            </TableCell>
                            <TableCell align="center">
                                <FormControl fullWidth variant="outlined">
                                    <TextArea
                                        multiline
                                        maxRows={4}
                                        endAdornment={
                                            <InputAdornment
                                                position="end"
                                                sx={{
                                                    cursor: "pointer",
                                                }}
                                            >
                                                <AddBoxIcon />
                                            </InputAdornment>
                                        }
                                        placeholder="Add CRA"
                                    />
                                </FormControl>
                            </TableCell>
                            <TableCell align="center">
                                <FormControl fullWidth variant="outlined">
                                    <TextArea
                                        endAdornment={
                                            <InputAdornment
                                                position="end"
                                                sx={{
                                                    cursor: "pointer",
                                                }}
                                            >
                                                <AddBoxIcon />
                                            </InputAdornment>
                                        }
                                        placeholder="Add DDTS"
                                    />
                                </FormControl>
                            </TableCell>
                        </TableRow>
                    );
                })}
            </TableBody>
        </Table>
    );
};

export default TestCaseTable;
