import {makeStyles} from "@material-ui/core";
import theme from "../../assets/theme";
import {Link} from "react-router-dom";
import clsx from "clsx";
import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";

const SideBarMenuItem = ({title, icon, rout}) => {
    const [isActive, setIsActive] = useState(false)
    const useStyles = makeStyles({
        root: {
            display: 'flex',
            flexWrap: 'nowrap',
            alignItems: 'center',
            padding: '0 32px',
            height: 56,
            fontWeight: 500,
            fontSize: 18,
            cursor: 'pointer',
            color: theme.palette.text.main,
            textDecoration: 'none',
        },
        title: {
            marginLeft: 15,
        },
        active: {
            background: theme.palette.background.main,
            color: '#4C1DD2',
            '& svg path': {
                fill: '#4C1DD2',
            }
        }
    });
    const location = useLocation()

   useEffect(() => {
       setIsActive(location.pathname === rout)
   }, [location, rout])

    const classes = useStyles()
    return (
        <Link className={clsx(classes.root, isActive && classes.active)} to={rout}>
            {icon}
            <div className={classes.title}>{title}</div>
        </Link>
    )
};

export default SideBarMenuItem;
