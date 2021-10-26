import {Button } from "@material-ui/core";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';
import moment from "moment";
import {useState} from "react";
import SideBarMenu from "./SideBarMenu";

const SideBar = () => {
    const [date, setDate] = useState(new Date())

    moment.locale('ru');

    return (
        <>
            <SideBarMenu type={'admin'}/>

            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DatePicker
                    autoOk
                    orientation="landscape"
                    variant="static"
                    openTo="date"
                    value={date}
                    onChange={setDate}
                    disableToolbar={true}
                />
            </MuiPickersUtilsProvider>

            <Button variant="contained" color={'primary'}>Забронировать</Button>
        </>
    )
};

export default SideBar;
