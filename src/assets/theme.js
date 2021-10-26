import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    overrides: {
        // Style sheet name ⚛️
        MuiButton: {
            // Name of the rule
            root: {
                border: '1px solid #121B30',
                borderRadius: '3px',
                textTransform: 'none',
                padding: '8px 15px'
            },
            contained: {
                backgroundColor: '#fff',
                boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.15)',
            },
            containedPrimary: {
                borderColor: 'transparent',
            },
            containedSecondary: {
                border: 'transparent',
            },
            text: {
                // Some CSS
                color: 'white',
            },
        },
        MuiPickersDay: {
            day: {
                width: 28,
                height: 28,
            }
        },
        MuiPickersCalendarHeader: {
            dayLabel: {
                width: 28,
            },
            daysHeader: {
                boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.15)',
                borderRadius: 5,
                height: 32,
                maxHeight: 32,
            }
        },
        MuiPickersCalendar: {
            transitionContainer: {
                boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.15)',
                borderRadius: 5,
                minHeight: 170,
            },

        },
        MuiPickersBasePicker: {
            pickerView: {
                maxWidth: 236,
                minWidth: 236,
            }
        },
        MuiPickersStaticWrapper: {
            staticWrapperRoot: {
                minWidth: 236,
            }
        }
    },
    palette: {
        primary: {
            light: 'rgba(238,49,49,0.8)',
            main: 'rgba(238,49,49,1)',
            dark: '#AD0E0E',
            contrastText: '#fff',
        },
        secondary: {
            light: 'rgba(10,160,110, 0.8)',
            main: 'rgba(10,160,110, 1)',
            dark: '#088058',
            contrastText: '#fff',
        },
        background: {
            main: '#FAF9FF',
            white: '#fff',
            dark: '#121B30',
            weekends: '#F6F3FD',
        },
        text: {
            main: '#333333',
            secondary: '#121B30',
            disabled: '#A9A9A9',
        },
        calendarEvents: {
            danger: '#EE3131',
            warning: '#F29500',
            success: '#0AA06E',
            primary: '#9C88D6',
            secondary: '#A9A9A9',
        }
    },
    typography: {
        fontFamily:"'Montserrat', 'sans-serif'",
        h1: {
            fontWeight: 600,
            fontSize: '40px',
            lineHeight: '50px',
        },
        h2: {
            fontWeight: 600,
            fontSize: '32px',
            lineHeight: '40px',
        },
        h3: {
            fontWeight: 600,
            fontSize: '24px',
            lineHeight: '30px',
        },
        subtitle1: {
            fontWeight: 600,
            fontSize: '16px',
            lineHeight: '24px',
            textTransform: 'uppercase',
        },
        body1: {
            fontWeight: 400,
            fontSize: '12px',
        }
    }
});

export default theme;
