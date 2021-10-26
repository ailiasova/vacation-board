import {CalendarIcon} from "../../assets/icons/CalendarIcon";
import {NotificationIcon} from "../../assets/icons/NotificationIcon";
import {NoteIcon} from "../../assets/icons/NoteIcon";
import {UsersIcon} from "../../assets/icons/UsersIcon";
import {SettingsIcon} from "../../assets/icons/SettingsIcon";
import SideBarMenuItem from "./SideBarMenuItem";
import {makeStyles} from "@material-ui/core";

const SideBarMenu = ({type}) => {
    const useStyles = makeStyles({
        root: {
            marginTop: 16,
            width: '100%',
        },
    })

    const adminMenuList = [
        {
            name: 'График отпусков',
            rout: '/weekend_calendar',
            icon: <CalendarIcon/>,
        },
        {
            name: 'Мои уведомления',
            rout: '/notification',
            icon: <NotificationIcon/>,
        },
        {
            name: 'Список заявок',
            rout: '/notes',
            icon: <NoteIcon/>,
        },
        {
            name: 'Сотрудники',
            rout: '/employees',
            icon: <UsersIcon/>,
        },
        {
            name: 'Настройки',
            rout: '/settings',
            icon: <SettingsIcon/>,
        },
    ]
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {adminMenuList.map(menuItem => (
                <SideBarMenuItem
                    key={menuItem.rout}
                    rout={menuItem.rout}
                    title={menuItem.name}
                    icon={menuItem.icon} />
            ))}
        </div>
    )
};

export default SideBarMenu;
