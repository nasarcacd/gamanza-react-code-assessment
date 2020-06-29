import { createMuiTheme } from '@material-ui/core/styles';

const blue = '#277db7';
const orange = '#FFBA60';
const brown = '#582b00';
const green = '#607309';

export default createMuiTheme({
    palette: {
        common: {
            blue: `${blue}`,
            orange: `${orange}`,
            brown: `${brown}`,
            green: `${green}`
        },
        primary: {
            main: `${blue}`
        },
        secondary: {
            main: `${orange}`
        },
    },
    typography: {
        tab: {
            fontFamily: 'Raleway',
            textTransform: 'none',
            fontWeight: 700,
            fontSize: '1rem'
        }
    }
});