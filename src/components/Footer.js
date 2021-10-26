import {makeStyles} from "@material-ui/core";
import theme from "../assets/theme";

const Footer = () => {
    const useStyles = makeStyles({
        root: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: theme.palette.background.dark,
            padding: '12px 32px',
        },
        links: {
            color: '#fff',
            fontSize: '14px',
            '& > div': {
                marginRight: 32,
            }
        }
    })

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.links}>
                <a href={'#'}>Политика конфиденциальности</a>
                <a href={'#'}>Пользовательское соглашение</a>
            </div>
            <div>
                <a href="mailto:hello@joy-dev.com">hello@joy-dev.com</a>
                <div>© 2008–2021 JoyDev</div>
            </div>
        </div>
    )
};

export default Footer;
