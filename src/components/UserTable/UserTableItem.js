import {Button, Checkbox, Grid, makeStyles, Typography} from "@material-ui/core";
import {useState} from "react";

import CheckBoxOutlineIcon from '../../assets/icons/CheckBoxOutlineIcon'
import CheckBoxIcon from "../../assets/icons/CheckBoxIcon";

const UserTableItem = () => {
    const [isChecked, setIsChecked] = useState(false)

    const useStyles = makeStyles({
        root: {
            backgroundColor: '#F5F3FC',
            padding: 25,
        },
        checkbox: {
            maxWidth: 50,
        }
    });

    const classes = useStyles()
    return (
        <Grid container direction="row" justify={'space-between'} className={classes.root}>
            <Grid container item sm={1} className={classes.checkbox}>
                <Checkbox
                    icon={isChecked ? <CheckBoxOutlineIcon/> : <CheckBoxIcon/>}
                    checked={isChecked}
                    onChange={() => setIsChecked(!isChecked)}
                />
            </Grid>
            <Grid container direction={'column'} item sm={2}>
                <Typography variant={'subtitle1'}>ИМЯ СОТРУДНИКА</Typography>
                <Typography variant={'body1'}>Должность/направление</Typography>
            </Grid>
            <Grid container direction={'column'} item sm={5}>
                <Typography variant={'subtitle1'}>Запрос на отпуск с 23.03.2021 по 29.03.2021</Typography>
                <Typography variant={'body1'}>Гулял 14 дней/ осталось 7 дней</Typography>
            </Grid>
            <Grid container item sm={4} justify={'space-between'}>
                <Button variant={'contained'} color={'secondary'}>Утвердить</Button>
                <Button variant={'contained'} color={'primary'}>Отклонить</Button>
                <Button variant={'contained'}>Другие даты</Button>
            </Grid>
        </Grid>
    )
};

export default UserTableItem;
