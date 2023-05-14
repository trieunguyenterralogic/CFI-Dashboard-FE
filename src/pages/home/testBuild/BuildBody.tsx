// ** Mui Imports
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";

// ** Constant Imports
import { columnsTestBuild } from "@constants/home";

// ** Type Imports
import { ColumnsTestBuild, TestBuild } from "@type/home";

import dummyData from "./testBuild.json";

// ** Build Body Props
interface Props {
    // dataSource: TestBuild[];
    handleTestBuild: (testBuild: TestBuild) => void;
}

const BuildBody = (props: Props) => {
    // ** Props
    const { handleTestBuild } = props;

    return (
        <TableBody>
            {dummyData.map((build: TestBuild) => {
                return (
                    <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={build.startTime}
                        onClick={() => handleTestBuild(build)}
                        className="row-test-build cursor-pointer"
                    >
                        {columnsTestBuild.map((column: ColumnsTestBuild) => {
                            const value = build[column.id];
                            return (
                                <TableCell
                                    key={column.id}
                                    align="center"
                                    className="col-test-build"
                                >
                                    {value}
                                </TableCell>
                            );
                        })}
                        {/* <TableCell align="right">
                            <Stack direction="row" spacing={1} justifyContent="end">
                                <IconButton aria-label="share">
                                    <img src={images.IconShare} />
                                </IconButton>
                                <IconButton aria-label="arrow-up">
                                    <img src={images.IconArrowUp} />
                                </IconButton>
                                <IconButton aria-label="edit">
                                    <img src={images.IconEdit} />
                                </IconButton>
                            </Stack>
                        </TableCell> */}
                    </TableRow>
                );
            })}
        </TableBody>
    );
};

export default BuildBody;
