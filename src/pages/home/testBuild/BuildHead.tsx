// ** Mui Imports
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Typography from "@mui/material/Typography";
import MuiTableHead from "@mui/material/TableHead";

// ** Component Imports
import Select from "@components/select";

// ** Constant Imports
import { columnsTestBuild } from "@constants/home";

const BuildHead = () => {
    return (
        <MuiTableHead>
            <TableRow>
                {columnsTestBuild.map((colum, index) => {
                    if (index < 5) {
                        return (
                            <TableCell
                                key={colum.id}
                                style={{
                                    minWidth: 200,
                                    background: "#F5FAFF",
                                }}
                                className="first:rounded-tl-lg"
                            >
                                <Typography
                                    variant="title_table"
                                    className="pb-1"
                                >
                                    {colum.label}
                                </Typography>
                                <Select
                                    fullWidth
                                    options={[10, 20, 30]}
                                    placeholder="Search"
                                />
                            </TableCell>
                        );
                    }

                    return (
                        <TableCell
                            key={colum.id}
                            style={{ minWidth: 95, background: "#F5FAFF" }}
                            align="center"
                            className="last:rounded-tr-lg"
                        >
                            <Typography variant="title_table" className="pb-1">
                                {colum.label}
                            </Typography>
                        </TableCell>
                    );
                })}
            </TableRow>
        </MuiTableHead>
    );
};

export default BuildHead;
