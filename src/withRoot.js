import * as React from "react";
import { CssBaseline } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
    palette: {
        primary: {
            light: "#e5e5e5",
            main: "#2d8dc7",
            dark: "#1d1d39",
            contrastText: "#fff",
        },
        secondary: {
            light: "#98c2ff",
            main: "#82d1b0",
            dark: "#110e37",
            contrastText: "#fff",
        },
    },
});

export function withRoot(Component) {
    function WithRoot(props) {
        // MuiThemeProvider makes the theme available down the React tree
        // thanks to React context.
        return (
            <ThemeProvider theme={theme}>
                {/* Reboot kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                <Component {...props} />
            </ThemeProvider>
        );
    }

    return WithRoot;
}
