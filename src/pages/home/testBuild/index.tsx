// ** React Imports
import { useState } from "react";

// ** MUI Imports
import { Box, Table, TableContainer } from "@mui/material";

// ** Type Imports
import { TestBuild as TestBuildType } from "@type/home";

// ** Component Imports
import Pagination from "@components/pagination";

import BuildHead from "./BuildHead";
import BuildBody from "./BuildBody";

// ** Style Imports
import "./styles.css";

// ** Define Props type
interface Props {
    handleTestBuild: (testBuild: TestBuildType) => void;
}

const TestBuild = (props: Props) => {
    // ** Props
    const { handleTestBuild } = props;

    // ** State
    const [testBuildList, _] = useState<TestBuildType[]>([]);

    return (
        <Box className="border border-solid border-gray-300 rounded-lg">
            <TableContainer>
                <Table stickyHeader aria-label="sticky table">
                    <BuildHead />
                    <BuildBody handleTestBuild={handleTestBuild} />
                </Table>
            </TableContainer>
            {testBuildList.length > 0 && <Pagination />}
        </Box>
    );
};

export default TestBuild;
