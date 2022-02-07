import {BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "../Landing";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {DAppProvider} from "@usedapp/core";

function Routes(props) {
    const darkTheme = createTheme({
        palette: {
            mode: "dark",
            primary: {
                main: "#ECB000"
            },
            secondary: {
                main: "#ffffff"
            }
        },
        typography: {
            fontFamily: 'Neue Machina'
        }
    });

    return (
        <BrowserRouter>
            <DAppProvider config={{}}>
                <ThemeProvider theme={darkTheme}>
                    <Switch>
                        <Route exact path="/">
                            <Landing/>
                        </Route>
                    </Switch>
                </ThemeProvider>
            </DAppProvider>
        </BrowserRouter>
    );
}

export default Routes;
