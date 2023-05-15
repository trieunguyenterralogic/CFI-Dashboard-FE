// ** React Imports
import { useState } from "react";

// ** Image Imports
import images from "@assets/images";

// ** MUI Imports
import { Box, Button, Table, TableContainer, Typography } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

// ** Component Imports
import TestCase from "../testCase";
import SummaryHead from "./SummaryHead";
import SummaryBody from "./SummaryBody";
import BuildSummary from "./BuildSummary";

// ** Type Imports
import { TestSummary as TestSummaryType } from "@type/home";
// import Pagination from "@components/pagination";

// ** Define Props type
interface Props {
    handleTestBuild: () => void;
}

// ** Button Filter header
const renderBtnFilterHeader = (image: string) => {
    return (
        <Button
            variant="contained"
            sx={{
                "&.MuiButtonBase-root": {
                    height: 40,
                },
            }}
        >
            <img src={image} />
        </Button>
    );
};

const TestSummary = (props: Props) => {
    // ** Props
    const { handleTestBuild } = props;

    // ** State
    const [testSummaryList, _] = useState<TestSummaryType[]>([
        {
            suite_id: 1,
            name: "common set up",
            result: "success",
            total: 65,
            passed: 58,
            failed: 2,
            errored: 1,
            blocked: 3,
            skipped: 5,
            ddts: 96.67,
        },
    ]);

    const [detailTestSummary, setDetailTestSummary] =
        useState<TestSummaryType>();

    const handleTestSummary = (testCase?: TestSummaryType) => {
        setDetailTestSummary(testCase);
    };

    return (
        <Box>
            <Button
                variant="text"
                color="secondary"
                startIcon={<KeyboardArrowLeftIcon />}
                onClick={() => handleTestBuild()}
                sx={{ fontWeight: 400, fontSize: 15 }}
            >
                Back to results
            </Button>

            <Box className="testcase border border-solid border-gray-300 rounded-lg mt-1">
                <BuildSummary />

                <Box className="flex items-center justify-between p-4 border-t border-b border-solid border-gray-300">
                    <Box className="flex items-center">
                        <Typography variant="header_3">Test Summary</Typography>
                    </Box>
                    <Box className="flex items-center">
                        <Box className="mr-4">
                            {renderBtnFilterHeader(images.IconFilter)}
                        </Box>
                        <Box>{renderBtnFilterHeader(images.IconSort)}</Box>
                    </Box>
                </Box>

                <TableContainer>
                    <Table stickyHeader aria-label="sticky table">
                        <SummaryHead />
                        <SummaryBody
                            testSummaryList={testSummaryList}
                            handleTestSummary={handleTestSummary}
                        />
                    </Table>
                </TableContainer>

                {/* <Pagination /> */}
            </Box>

            <TestCase
                testSummary={detailTestSummary}
                onCloseDialog={handleTestSummary}
            />
        </Box>
    );
};

export default TestSummary;
