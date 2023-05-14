import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
    interface TypographyVariants {
        header_2: React.CSSProperties;
        header_3: React.CSSProperties;
        title: React.CSSProperties;
        title_table: React.CSSProperties;
        placeholder: React.CSSProperties;
        text: React.CSSProperties;
        text_underline: React.CSSProperties;
    }

    interface TypographyVariantsOptions {
        header_2?: React.CSSProperties;
        header_3?: React.CSSProperties;
        title?: React.CSSProperties;
        title_table?: React.CSSProperties;
        placeholder?: React.CSSProperties;
        text?: React.CSSProperties;
        text_underline?: React.CSSProperties;
    }
}

declare module "@mui/material/Typography" {
    interface TypographyPropsVariantOverrides {
        header_2: true;
        header_3: true;
        title: true,
        title_table: true;
        placeholder: true;
        text: true;
        text_underline: true;
    }
}

const theme = createTheme({
    palette: {
        primary: {
            main: "#00BCEB",
            contrastText: "#FFFFFF",
        },
        secondary: {
            main: "#414344",
        },
    },
    typography: {
        h1: {
            fontSize: 30,
            fontWeight: 400,
            color: "#00BCEB",
            letterSpacing: "0.005em",
        },
        header_2: {
            fontSize: 24,
            fontWeight: 400,
            color: "#00BCEB",
        },
        header_3: {
            fontSize: 19,
            fontWeight: 400,
            color: "#00BCEB",
        },
        title: {
            fontSize: 15,
            fontWeight: 400,
            color: "#121212",
        },
        title_table: {
            fontWeight: 300,
            fontSize: 15,
            color: "#475467"
        },
        placeholder: {
            fontWeight: 300,
            fontSize: 15,
            color: "#8D959C"
        },
        text: {
            fontWeight: 400,
            fontSize: 15,
            color: "#475467"
        },
        text_underline: {
            fontWeight: 400,
            fontSize: 15,
            color: "#0B72CC",
            textDecoration: "underline"
        }
    },
});

export default theme;