// ** MUI Imports
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import Typography from "@mui/material/Typography";
import TableCell, { TableCellProps } from "@mui/material/TableCell";

// ** Styled Imports
import { styled } from "@mui/material";

// ** Component Imports
import Select from "@components/select";

// ** Constant Imports
import { columnsTestSummary } from "@constants/home";

// ** Customize style of Table cell
const MuiTabelCell = styled(TableCell)<TableCellProps>(() => {
    return {
        background: "#F5FAFF",
    };
});

const SummaryHead = () => {
    return (
        <TableHead sx={{ background: "#F5FAFF" }}>
            <TableRow>
                <MuiTabelCell style={{ minWidth: 50 }} align="center">
                    <Typography variant="title_table" className="pb-1">
                        #
                    </Typography>
                </MuiTabelCell>

                {columnsTestSummary.map((colum, index) => {
                    if (index === 0) {
                        return (
                            <MuiTabelCell
                                key={colum.id}
                                style={{ minWidth: 300 }}
                                align="left"
                            >
                                <Typography
                                    variant="title_table"
                                    className="pb-1"
                                >
                                    {colum.label}
                                </Typography>
                                <Select
                                    options={[10, 20, 30]}
                                    placeholder="Select Use Case"
                                    fullWidth
                                />
                            </MuiTabelCell>
                        );
                    }

                    return (
                        <MuiTabelCell
                            key={colum.id}
                            style={{ minWidth: 150 }}
                            align="center"
                        >
                            <Typography variant="title_table" className="pb-1">
                                {colum.label}
                            </Typography>
                        </MuiTabelCell>
                    );
                })}
            </TableRow>
        </TableHead>
    );
};

export default SummaryHead;
