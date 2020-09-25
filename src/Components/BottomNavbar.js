import React from 'react';
import { makeStyles,createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import ImageSearchIcon from '@material-ui/icons/ImageSearch';
import ClearIcon from '@material-ui/icons/Clear';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles({
  root: {
    position: 'fixed',
    bottom: 0,
    width: '100vw',
  },
  body: {
  },
});

const theme = createMuiTheme({
  palette: {
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

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <div className={classes.body}>
    <ThemeProvider theme={theme}>
      <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction icon={<AddAPhotoIcon />} />
      <BottomNavigationAction icon={<ImageSearchIcon />} />
      <BottomNavigationAction icon={<ClearIcon />} />
      <BottomNavigationAction icon={<SendIcon />} />
    </BottomNavigation>
    </ThemeProvider>
    </div>
  );
}
