import React from 'react'
import { makeStyles, ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import lightTheme from '@/themes/light'
import Copyright from '@/atoms/Copyright'
import { TransitionProps } from '@material-ui/core/transitions';
import Slide from '@material-ui/core/Slide';
import CustomAvatar from '@/atoms/CustomAvatar'
import FormLogin from '@/molecules/FormLogin'
import FormSignup from '@/molecules/FormSingup'

const useStyles = makeStyles((theme) => ({
    paper: {
        margin: 0,
        padding: 0,
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      },
  }))
 
const Transition = React.forwardRef<unknown, TransitionProps>((props, ref) => {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Login = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <ThemeProvider theme={lightTheme}>
            <CustomAvatar/>       
        <Typography component="h1" variant="h5">
          Inicio de Sesión
        </Typography>        
        <FormLogin Click={handleClickOpen}/>
        <FormSignup Op={open} Trans={Transition} Close={handleClose}/>
        </ThemeProvider>
        <Box mt={8}>
        <Copyright />
        </Box>
      </div> 
    </Container>
  );
}

export default Login