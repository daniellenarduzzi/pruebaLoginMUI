import { createMuiTheme } from '@material-ui/core/styles'

export const lightTheme = createMuiTheme ({
    palette: {
        type: 'light',
        primary: {
            main: '#f44336',      
            dark: '#aa2e25',
            light: '#f6685e',      
        },
        secondary: {
            main: '#262626',
            dark: '#1a1a1a',
            light: '#515151',
        }
    }
})