// ** React Imports
import { ReactNode, Ref, forwardRef } from "react";

// ** MUI Imports
import Box from "@mui/material/Box";
import PaginationItem from "@mui/material/PaginationItem";
import MuiPagination, { PaginationProps } from "@mui/material/Pagination";

// ** Styled Import
import { styled } from "@mui/material/styles";

// ** Icon Imports
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// ** Customize style Mui Pagination
const MuiPaginationStyle = styled(MuiPagination)<PaginationProps>(() => {
    return {
        "&.MuiPagination-root .MuiPagination-ul li:first-of-type": {
            position: "absolute",
            left: "1rem",
        },
        "&.MuiPagination-root .MuiPagination-ul .MuiPaginationItem-previousNext":
            {
                padding: 0,
            },
        "&.MuiPagination-root .MuiPagination-ul li:first-of-type button:hover":
            {
                backgroundColor: "",
            },
        "&.MuiPagination-root .MuiPagination-ul li:last-child": {
            position: "absolute",
            right: "1rem",
        },
        "&.MuiPagination-root .MuiPagination-ul li:last-child button:hover": {
            backgroundColor: "",
        },
    };
});

// ** Custom btn Next or Prev
const CustomButton = ({ children }: { children: ReactNode }) => {
    return (
        <div
            className="flex items-center border border-solid border-gray-300 
            px-4 py-2 rounded-md font-medium 
            hover:border-blue-primary hover:text-blue-primary"
        >
            {children}
        </div>
    );
};

const Pagination = forwardRef((props: PaginationProps, ref: Ref<any>) => {
    return (
        <Box className="py-5 relative border-t border-solid border-gray-300">
            <MuiPaginationStyle
                ref={ref}
                {...props}
                count={10}
                shape="rounded"
                className="flex justify-center"
                renderItem={(item) => (
                    <PaginationItem
                        components={{
                            next: (_) => (
                                <CustomButton>
                                    Next
                                    <ArrowForwardIcon
                                        fontSize={"small"}
                                        className="ml-2"
                                    />
                                </CustomButton>
                            ),
                            previous: (_) => (
                                <CustomButton>
                                    <ArrowBackIcon
                                        fontSize={"small"}
                                        className="mr-2"
                                    />
                                    Prev
                                </CustomButton>
                            ),
                        }}
                        {...item}
                    />
                )}
            />
        </Box>
    );
});

export default Pagination;
