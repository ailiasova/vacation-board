import {makeStyles} from "@material-ui/core";
import theme from "../assets/theme";

const Header = () => {
    const useStyles = makeStyles({
        root: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 80,
            width: '100%',
            padding: '0 32px',
            fontSize: '24px',
            fontWeight: 600,
            color: theme.palette.background.white,
            backgroundColor: theme.palette.background.dark,
        },
        logo: {

        },

    })

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div>
                <div className={classes.logo}></div>
                <div>Vacations</div>
            </div>
            <div>

            </div>
        </div>
    )
};

export default Header;
