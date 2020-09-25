import { Theme } from '@material-ui/core'
import { lightTheme } from './theme'
import { darkTheme } from './darkTheme'

export function geThemeByName(theme: string) : Theme {
    return themeMap[theme];
}

const themeMap: { [key: string]: Theme } = {
    lightTheme,
    darkTheme,
};