import React, {useState} from 'react'
import { MuiThemeProvider } from '@material-ui/core'
import { geThemeByName } from './Themes/base'

export const ThemeContext = React.createContext((themeName: string): void => {})

const ThemeProvider: React.FC = (props) => {
    const [themeName, _setThemeName] =useState('lightTheme');
    const theme = geThemeByName(themeName);
    return (
        <ThemeContext.Provider value = {_setThemeName}>
            <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;