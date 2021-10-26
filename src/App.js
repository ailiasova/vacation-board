import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { ThemeProvider, withStyles } from '@material-ui/core/styles';
import {LinearProgress, makeStyles} from "@material-ui/core";
import theme from "./assets/theme";
import 'moment/locale/ru';
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import Footer from "./components/Footer";

import './App.css';

function App() {
    const BorderLinearProgress = withStyles((theme) => ({
        root: {
            height: 46,
            width: '50%',
            borderRadius: 25,
        },
        colorPrimary: {
            backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
        },
        bar: {
            borderRadius: 5,
        },
    }))(LinearProgress);
    const useStyles = makeStyles({
        root: {
            backgroundColor: theme.palette.background.main,
        },
    })

    const classes = useStyles();

  return (
      <ThemeProvider theme={theme} >
          <Router>
              <div className={classes.root}>
                <Header />
                  <Switch>
                      <Route path="/">
                          <MainPage accessType={'user'} />
                      </Route>

                      <Route path="/login">
                      </Route>
                  </Switch>
                <Footer/>
              </div>
          </Router>
      </ThemeProvider>
  );
}

export default App;
