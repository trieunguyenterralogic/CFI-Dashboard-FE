// ** Mui Imports
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import Typography from "@mui/material/Typography";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";

// ** Constant Imports
import { columsBuildSummary } from "@constants/home";

// ** Create data fake
const dummyData = {
    build: 2400,
    jenkinsUrl: "Jenkins",
    clusterUrl: "Cluster",
    tradeUrl: "Trade",
    startTime: "07/07/2021, 00:04:00",
    endTime: "07/07/2021, 00:27:42",
    total: "00:23:42",
};

const BuildSummary = () => {
    return (
        <Box className="">
            <Box className="border-b border-solid border-gray-300 text-center py-4">
                <Typography variant="header_2" className="pb-1">
                    Build Summary
                </Typography>
            </Box>
            <Box>
                <Table>
                    <TableHead>
                        <TableRow>
                            {columsBuildSummary.map((colum) => (
                                <TableCell key={colum.id} align="center">
                                    <Typography variant="text">
                                        {colum.label}
                                    </Typography>
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        <TableRow>
                            {columsBuildSummary.map((colum) => (
                                <TableCell
                                    align="center"
                                    component="th"
                                    scope="row"
                                    sx={{ borderBottom: "none" }}
                                >
                                    <Typography
                                        variant="text"
                                        className={colum.className}
                                    >
                                        {dummyData[colum.id]}
                                    </Typography>
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableBody>
                </Table>
            </Box>
        </Box>
    );
};

export default BuildSummary;
