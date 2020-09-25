import { createMuiTheme } from '@material-ui/core/styles'

export const lightTheme = createMuiTheme ({
    palette: {
        background: {
            default: '#fff'
        },
        type: 'light',
        primary: {
            main: '#263238',      
            dark: '#000a12',
            light: '#4f5b62',      
        },
        secondary: {
            main: '#00838f',
            dark: '#005662',
            light: '#4fb3bf',
        },
        text: {
            primary: '#262626',
        },
        action: {
            hover: '#000a12',
        }
    }
})