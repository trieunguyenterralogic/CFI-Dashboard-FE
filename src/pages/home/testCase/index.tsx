// ** MUI Imports
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

// ** Image Import
import images from "@assets/images";

// ** Type Imports
import { TestSummary } from "@type/home";
import TestCaseTable from "./TestCaseTable";

// ** Define Props type
interface Props {
    testSummary: TestSummary | undefined;
    onCloseDialog: () => void;
}

const TestCase = (props: Props) => {
    // ** Props
    const { testSummary, onCloseDialog } = props;

    return (
        <Dialog
            maxWidth="lg"
            open={!!testSummary?.useCase}
            onClose={onCloseDialog}
        >
            <DialogTitle className="flex justify-between items-start border-b border-solid border-gray-300 pl-12 relative">
                <Typography
                    variant="title"
                    sx={{
                        textTransform: "uppercase",
                        fontSize: 16,
                        paddingRight: 4,
                    }}
                >
                    Detailed Results for the ...Detailed Results for the
                </Typography>

                <IconButton
                    onClick={onCloseDialog}
                    size="small"
                    sx={{ position: "absolute", right: 16, top: 8 }}
                >
                    <Box className="w-6 h-6">
                        <img src={images.IconCloseCircle} />
                    </Box>
                </IconButton>
            </DialogTitle>

            <DialogContent sx={{ padding: 0 }}>
                <TestCaseTable />
            </DialogContent>
        </Dialog>
    );
};

export default TestCase;
