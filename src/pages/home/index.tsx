// ** React Imports
import { useEffect } from "react";

// ** Layout Imports
import Header from "@layouts/header";

// ** MUI Imports
import Box from "@mui/material/Box";
import MuiButton, { ButtonProps } from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// ** Styled Import
import { styled } from "@mui/material";

// ** Component Imports
import TableTest from "@pages/home/tableTest";
import ChartVisualizer from "./chartVisualizer";

// ** Customize Button style
const Button = styled(MuiButton)<ButtonProps>(() => {
    return {
        boxShadow: "none",
        borderColor: "#E2E2E2",
        textTransform: "none",
        fontSize: 16,
        fontWeight: 400,
        "&.MuiButton-outlined:hover": {
            boxShadow: "none",
            borderColor: "#00BCEB",
            color: "#00BCEB",
        },
    };
});

const Home = () => {
    return (
        <>
            <Header />

            <Box width={1300} className="mx-auto mt-5 mb-16">
                <Box className="flex items-end justify-end">
                    <Button
                        color="secondary"
                        variant="outlined"
                        sx={{ marginRight: "1.5rem " }}
                    >
                        DDTS
                    </Button>
                    <Button
                        endIcon={<ArrowForwardIcon />}
                        variant="outlined"
                        color="secondary"
                    >
                        Switch to Jenkin
                    </Button>
                </Box>

                <ChartVisualizer />

                <TableTest />
            </Box>
        </>
    );
};

export default Home;
