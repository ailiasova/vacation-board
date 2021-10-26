import Moment from 'moment';
import { extendMoment } from 'moment-range';

const moment = extendMoment(Moment);

/*
    byDays: {
        label: "по дням",
            baseUnit: 'day',
            parentUnit: 'month',
            defaultRange: [0.5, 'year']
    },
    byWeeks: {
        label: "По неделям",
            baseUnit: 'week',
            parentUnit: 'month',
            defaultRange: [1, 'year']
    }
*/

export const EventTypes = {
    BIRTHDAY: "birthday",
    DENIED: "denied",
    APPROVED: "approved",
    PENDING: "pending_review",
    OFFER: "counter_offer",
    DAYFREE: "day_free",
}

export const ClassNamesByType = {
    [EventTypes.BIRTHDAY]: 'warning',
    [EventTypes.DENIED]: 'danger',
    [EventTypes.APPROVED]: 'success',
    [EventTypes.PENDING]: 'secondary',
    [EventTypes.OFFER]: 'primary',
}

export const CalendarUnits = {
    YEAR: 'year',
    MONTH: 'month',
    WEEK: 'week',
    DAY: 'day',
};

export const FormatByUnits = {
    [CalendarUnits.YEAR]: 'YYYY',
    [CalendarUnits.MONTH]: 'MMMM',
    [CalendarUnits.WEEK]: 'WW',
    [CalendarUnits.DAY]: 'DD',
}

export const CellWidthByUnit = {
    [CalendarUnits.MONTH]: 180,
    [CalendarUnits.WEEK]: 36,
    [CalendarUnits.DAY]: 36,
}

/** @namespace */

export const getUserEventDuration = (calendarDateFrom, calendarDateTo, unit) => {
    /**
     * @param {Moment} calendarDateFrom - Начальная дата
     * @param {Moment} calendarDateTo - Конечная дата
     * @param {string} unit - Вид календаря
     * @returns {number}
     */
    if (calendarDateTo.diff(calendarDateFrom, unit) === 0) {
        return Math.abs(CellWidthByUnit[unit]);
    } else return Math.abs(calendarDateTo.diff(calendarDateFrom, unit) * CellWidthByUnit[unit]);
}

export const getEventDuration = (calendarDateFrom, calendarDateTo, unit) => {
    /**
     * @param {Moment} calendarDateFrom - Начальная дата
     * @param {Moment} calendarDateTo - Конечная дата
     * @param {string} unit - Вид календаря
     * @returns {number}
     */
    return (calendarDateTo.diff(calendarDateFrom, unit) + 1) * CellWidthByUnit[unit];
}

export const getCellsByUnit = (calendarDateFrom, calendarDateTo, unit) => {
    /**
     * @param {Moment} calendarDateFrom - Начальная дата
     * @param {Moment} calendarDateTo - Конечная дата
     * @param {string} unit - Вид календаря
     * @returns {Array}
     */
    const d = moment.range(calendarDateFrom, calendarDateTo.subtract(1,CalendarUnits.DAY));
    return Array.from(d.by(unit));
}

export const getCellWidthByUnit = (_moment, mainUnit, secondaryUnit) => {
    /**
     * @param {Moment} _moment - Временная еденица (день, неделя и т.п)
     * @param {string} mainUnit - Вид календаря внешний
     * @param {string} secondaryUnit - Вид календаря внутренний
     * @returns {Array}
     */
    return getCellsByUnit(_moment, moment(_moment).add(1, mainUnit), secondaryUnit).length * CellWidthByUnit[secondaryUnit];
}

export const isWeekend = (date, unit) => {
    const dayOfWeek = Moment(date).get(unit);
    return (dayOfWeek === 6) || (dayOfWeek  === 0);
}

