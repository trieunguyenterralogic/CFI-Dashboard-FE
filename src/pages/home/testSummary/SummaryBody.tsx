// ** MUI Imports
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import Typography from "@mui/material/Typography";

// ** Type Imports
import { TestSummary } from "@type/home";

// ** Define Props type
interface Props {
    testSummaryList: TestSummary[];
    handleTestSummary: (testCase: TestSummary) => void;
}

// ** Custom Table cell
const CustomTableCell = ({ value }: { value: string | number }) => {
    return (
        <TableCell align="center">
            <Typography variant="text">{value}</Typography>
        </TableCell>
    );
};

const SummaryBody = (props: Props) => {
    // ** Props
    const { testSummaryList, handleTestSummary } = props;

    const classColResult = (result: string) => {
        switch (result) {
            case "success":
                return "text-green-500";

            default:
                break;
        }
    };

    return (
        <TableBody>
            {testSummaryList.map((summary: TestSummary, index: number) => {
                const {
                    name,
                    total,
                    passed,
                    failed,
                    blocked,
                    errored,
                    skipped,
                    ddts,
                    result,
                } = summary;
                return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={name}>
                        <CustomTableCell value={index} />
                        <TableCell
                            className="cursor-pointer"
                            onClick={() => handleTestSummary(summary)}
                        >
                            <Typography variant="text_underline">
                                {name}
                            </Typography>
                        </TableCell>
                        <CustomTableCell value={total} />
                        <CustomTableCell value={passed} />
                        <CustomTableCell value={failed} />
                        <CustomTableCell value={blocked} />
                        <CustomTableCell value={errored} />
                        <CustomTableCell value={skipped} />
                        <CustomTableCell value={ddts} />
                        <TableCell
                            align="center"
                            className="cursor-pointer"
                            onClick={() => handleTestSummary(summary)}
                        >
                            <Typography variant="text">
                                <span
                                    className={`${classColResult(
                                        result
                                    )} capitalize`}
                                >
                                    {result}
                                </span>
                            </Typography>
                        </TableCell>
                    </TableRow>
                );
            })}
        </TableBody>
    );
};

export default SummaryBody;
