import moment from "moment";
import {
    CalendarUnits,
    CellWidthByUnit,
    FormatByUnits,
    getEventDuration,
    getCellWidthByUnit,
    getCellsByUnit,
    isWeekend, ClassNamesByType, getUserEventDuration
} from './utils';
import clsx from 'clsx';
import {makeStyles} from "@material-ui/core";
import theme from "../../assets/theme";


const Calendar = ({
    mainUnit = CalendarUnits.MONTH,
    secondaryUnit = CalendarUnits.DAY,
    dateFrom = moment().startOf('day'),
    dateTo =  moment().add(1, 'year'),
    userList,
    eventList,
}) => {
    const width = getEventDuration(dateFrom, dateTo, mainUnit, secondaryUnit);
    const containerWidth = 1000;
    const leftHeaderWidth = 250;

    const useStyles = makeStyles({
        calendarContainer: {
            width: '100%',
            maxWidth: containerWidth,
            overflow: 'scroll',
            background: theme.palette.background.main,
        },
        calendar: {
            width,
        },
        calendarRow: {
            display: 'flex',
            flexWrap: 'nowrap',
            position: 'relative',
        },
        calendarCells: {
            display: 'flex',
            flexWrap: 'nowrap',
            position: 'relative',
        },
        rowBorder: {
            borderTop: '0.2px solid #000000'
        },
        calendarHeadCell: {
            fontWeight: 600,
            fontSize: 14,
            lineHeight: '28px',
            textAlign: "center",
        },
        calendarBodyCell: {
            height: 56,
            fontWeight: 600,
            fontSize: 14,
            left: 0,
            background: theme.palette.background.main,
        },
        calendarCell: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minWidth: CellWidthByUnit[secondaryUnit],
            height: 56,
            fontWeight: 'normal',
        },
        mainUnitHeader: {
            maxWidth: containerWidth-leftHeaderWidth,
        },
        sticky: {
            position: 'sticky',
            zIndex: 3,
        },
        weekend: {
            backgroundColor: '#F6F3FD',
        },
        post: {
            fontSize: '10px',
            fontWeight: 'normal',
        },
        userInfoCell: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            height: '100%'
        },
        userEvent: {
            position: 'absolute',
            display: 'flex',
            flexWrap: "nowrap",
            alignItems: 'center',
            justifyContent: 'space-between',
            color: '#fff',
            padding: '0 9px',
            height: 24,
            top: 16,
            borderRadius: 4,
        },
        danger: {
            background: theme.palette.calendarEvents.danger,
        },
        success: {
            background: theme.palette.calendarEvents.success,
        },
        secondary: {
            background: theme.palette.calendarEvents.secondary
        },
    })

    // diff dateTo - dateFrom = cells
    // cells * CellWidthByUnit[unit] = width in px
    // units array
    // render calendar cells
    const classes = useStyles();

    return (
        <div className={clsx(classes.calendarContainer)}>
            <div className={clsx([classes.calendar])}>
                <div>
                    <div className={clsx([classes.calendarRow])}>
                        <div className={clsx([classes.sticky])}
                            style={{minWidth: leftHeaderWidth}} >
                        </div>

                        {getCellsByUnit(dateFrom.startOf(mainUnit), dateTo, mainUnit).map((headerCell, index) => {
                            // headerCell = headerCell.startOf(secondaryUnit);
                            // console.log(headerCell.toDate())
                            return (
                                <div
                                    key={index}
                                    className={clsx([classes.calendarHeadCell])}
                                    style={{width: getCellWidthByUnit(headerCell, mainUnit, secondaryUnit)}}
                                >
                                    <div className={classes.mainUnitHeader}> {headerCell.format(FormatByUnits[mainUnit])} </div>

                                    <div className={clsx([classes.calendarRow])}>
                                        {getCellsByUnit(headerCell, moment(headerCell).add(1, mainUnit), secondaryUnit).map(date => (
                                            <div key={date} className={clsx(classes.calendarCell, isWeekend(date, secondaryUnit) && classes.weekend)}>
                                                {date.format(FormatByUnits[secondaryUnit])}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>

                <div>
                    {userList.map(user => (
                        <div key={user.id} className={classes.calendarRow}>

                            <div className={clsx([classes.calendarBodyCell, classes.rowBorder, classes.sticky])}
                                 style={{minWidth: leftHeaderWidth}} >
                                <div className={classes.userInfoCell}>
                                    <div>{user.name} {user.self && '(Это вы)'}</div>
                                    <div className={classes.post}>{user.post}</div>
                                </div>
                            </div>

                            <div className={classes.calendarCells}>
                                <div className={clsx([classes.calendarRow, classes.rowBorder])}>
                                {getCellsByUnit(dateFrom, dateTo, mainUnit).map((headerCell, index) => (
                                    getCellsByUnit(headerCell, moment(headerCell).add(1, mainUnit), secondaryUnit).map(date => (
                                        <div key={date} className={clsx(classes.calendarCell, isWeekend(date, secondaryUnit) && classes.weekend)}>
                                        </div>
                                    ))
                                ))}
                                </div>

                                {user.dates.map((date, index) => (
                                    <div
                                        key={index}
                                        className={clsx(classes.userEvent, classes[ClassNamesByType[date.type]])}
                                        style={{
                                            left: getUserEventDuration(dateFrom, moment(date.from), secondaryUnit),
                                            width: getUserEventDuration(date.from, moment(date.to), secondaryUnit),
                                        }}
                                    >
                                        <div>{moment(date.from).format(FormatByUnits[secondaryUnit])}</div>
                                        <div>{moment(date.to).format(FormatByUnits[secondaryUnit])}</div>
                                    </div>
                                ))}

                                {/*Events*/}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
};

export default Calendar;
