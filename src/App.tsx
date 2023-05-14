// ́** MUI Imports

// ** Theme Imports
import theme from "@configs/theme";
import { ThemeProvider } from "@mui/material/styles";

// ** Page Imports
import Home from "@pages/home";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Home />
        </ThemeProvider>
    );
}

export default App;
