import Calendar from "../components/Calendar/Calendar";
import {Grid, makeStyles} from "@material-ui/core";
import SideBar from "../components/SideBar/SideBar";
import theme from "../assets/theme";
import {EventTypes} from "../components/Calendar/utils";
import {Route, Switch} from "react-router-dom";
import NotificationPage from "./NotificationPage";

const MainPage = ({accessType}) => {
    const rows = [
        {
            id: 1,
            name: 'Евгений Петрович',
            post: 'Дизайнер',
            dates: [
                {from: '2021-06-03', to:'2021-06-08', type: EventTypes.APPROVED},
                {from: '2021-06-05', to:'2021-06-09', type: EventTypes.PENDING},
                {from: '2021-06-25', to: '2021-06-25', type: EventTypes.BIRTHDAY}],
            self: true,
        },
        {
            id: 2,
            name: 'Снежанна Александровна',
            post: 'Верстальщик',
            dates: [{from: '2021-06-07', to: '2021-06-11', type: EventTypes.DENIED},{from: '2021-06-15', to: '2021-06-18', type: EventTypes.APPROVED}],
            self: false,
        },
        {
            id: 3,
            name: 'Виктория Алешина',
            post: 'React Junior Developer',
            dates: [
                {from: '2021-06-25', to: '2021-06-28', type: EventTypes.PENDING},
                {from: '2021-06-02', to: '2021-06-02', type: EventTypes.PENDING},
                {from: '2021-06-20', to: '2021-06-21', type: EventTypes.APPROVED}
            ],
            self: false,
        },
        {
            id: 4,
            name: 'Дмитрий Пузатов',
            post: 'Front-end TeamLead',
            dates: [{from: '2021-06-10', to: '2021-06-20', type: EventTypes.PENDING},{from: '2021-06-22', to: '2021-06-25', type: EventTypes.APPROVED}],
            self: false,
        },
        {
            id: 5,
            name: 'Анна Снежко',
            post: 'Laravel Junior Developer',
            dates: [{from: '2021-06-06', to: '2021-06-08', type: EventTypes.DENIED},{from: '2021-06-22', to: '2021-06-25', type: EventTypes.APPROVED}],
            self: false,
        }
    ]

    const events = [{from: '01.01.2021', to: '07.01.2021', type: ''}, {from: '23.02.2021', to: '23.02.2021', type: ''}]
    const useStyles = makeStyles({
        root: {
            width: '100%',
            height: (document.body.clientHeight - 122),
            display: 'flex',
            flexWrap: 'nowrap',
            '& h3': {
                fontWeight: 600,
                fontSize: 32,
                margin: 0,
            }
        },
        main: {
            padding: 28,
            background: theme.palette.background.main,
        },
        leftSideBar: {
            maxWidth: 300,
            backgroundColor: theme.palette.background.white,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }
    })
    const classes = useStyles();

    return (
        <Grid container className={classes.root}>
            <Grid item md={3} sm={3} lg={3} className={classes.leftSideBar}>
                <SideBar/>
            </Grid>
            <Grid item md={9} className={classes.main}>
                <Switch>
                    <Route path="/weekend_calendar">
                        <h3>График отпусков</h3>
                        <Calendar userList={rows}/>
                    </Route>

                    <Route path="/notification">
                        <NotificationPage />
                    </Route>

                    <Route path="/notes">
                    </Route>

                    <Route path="/employees">
                    </Route>

                    <Route path="/settings">
                    </Route>

                    <Route path="/profile">
                    </Route>

                </Switch>
            </Grid>
        </Grid>
    )
};

export default MainPage;
