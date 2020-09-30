import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import lightTheme from '@/themes/light'
import Copyright from '@/atoms/Copyright'
import { TransitionProps } from '@material-ui/core/transitions';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close'

const useStyles = makeStyles((theme) => ({
    avatar: { 
      "&:hover": {
        backgroundColor: '#000a12',
      },
        backgroundColor: theme.palette.primary.main,
        margin: theme.spacing(1),        
    },
    paper: {
        margin: 0,
        padding: 0,
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
      },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    appBar: {
      position: 'relative',
      },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
      },
    registerForm: {
      justifyContent: 'center',
    },
    formContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      height: '100vh'
    },
    flexContainer: {
      display: 'flex',
      flexDirection: 'row',
      gap: '10px',
    }
}))

function CustomAvatar() {
    const classes = useStyles()

    return (
        <Avatar classes={{root: classes.avatar}}> 
            <LockOutlinedIcon />
         </Avatar>
    )
}
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
        <form className={classes.form} noValidate>
          <TextField
            color='primary'
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Dirección de Email"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            color='primary'
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Contraseña"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="secondary" />}
            label="Recordar constreseña"
            color='primary'
          />
          <Button
            color='primary'
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
          >
            Inicia Sesión
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" color='inherit' variant="body2">
                ¿Olvidaste la contraseña?
              </Link>
            </Grid>
            <Grid item>
              <Link onClick={handleClickOpen} color='inherit' variant="body2">
                {"Crear cuenta nueva"}
              </Link>                
            </Grid>
          </Grid>
        </form>
        <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
            <AppBar className={classes.appBar}> 
                <Toolbar>
                    <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                        <CloseIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Cuenta Nueva
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container className={classes.formContainer} maxWidth='xs'>
            <form className={classes.registerForm}> 
            <div className={classes.flexContainer}> 
              <TextField
                  color='primary'
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="Nombre"
                  name="name"
                  autoFocus>
              </TextField>
              <TextField
                  color='primary'
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="LastName"
                  label="Apellido"
                  name="LastName"
                  autoFocus>                
              </TextField>  
              </div>
              <TextField
                  color='primary'
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  type='number'
                  id="telephone"
                  label="Número de teléfono"
                  name="telephone"
                  autoFocus>
              </TextField>
              <TextField
                  color='primary'
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Dirección de Email"
                  name="email"
                  autoComplete="email"
                  autoFocus>
              </TextField>
              <TextField
                  color='primary'
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Contraseña"
                  type="password"
                  id="password"
                  autoComplete="current-password">
              </TextField>
              <Button
                color='primary'
                type="submit"
                fullWidth
                variant="contained"
                className={classes.submit}
              >
                  Registrarse
              </Button>
            </form>
          </Container>  
        </Dialog>
        </ThemeProvider>
        <Box mt={8}>
        <Copyright />
        </Box>
      </div> 
    </Container>
  );
}

export default Login