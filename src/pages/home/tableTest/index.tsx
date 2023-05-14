// ** React Imports
import { useState } from "react";

// ** MUI Imports
import { Box } from "@mui/material";

// ** Type Imports
import { TestBuild as TestBuildType } from "@type/home";

// ** Component Imports
import TestBuild from "../testBuild";
import TestSummary from "../testSummary";

const TableTest = () => {
    // ** State
    const [testBuildDetail, setTestBuildDetail] = useState<TestBuildType>();

    const handleTestBuild = (testBuild?: TestBuildType) => {
        setTestBuildDetail(testBuild);
    };

    return (
        <Box className="my-5">
            {!testBuildDetail ? (
                <TestBuild handleTestBuild={handleTestBuild} />
            ) : (
                <TestSummary handleTestBuild={handleTestBuild} />
            )}
        </Box>
    );
};

export default TableTest;
