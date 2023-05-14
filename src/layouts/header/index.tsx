// ** MUI Imports
import { Box, Typography } from "@mui/material";

// ** Image Import
import images from "@assets/images";

const Header = () => {
    return (
        <Box className="border-b border-solid border-gray-300">
            <Box
                width={1300}
                className="flex items-center justify-between py-5 mx-auto "
            >
                <Box className="w-1/4">
                    <img src={images.CiscoLogo} alt="CiscoLogo" />
                </Box>
                <Box className="w-2/4 text-center">
                    <Typography variant="h1">
                        SDA Regression Dashboard
                    </Typography>
                </Box>
                <Box className="w-1/4 flex items-center justify-end">
                    <img src={images.CiscoHome} alt="CiscoHome" />
                    <img
                        className="mx-4"
                        src={images.CiscoMess}
                        alt="CiscoMess"
                    />
                    <img src={images.CiscoUser} alt="CiscoUser" />
                </Box>
            </Box>
        </Box>
    );
};

export default Header;
