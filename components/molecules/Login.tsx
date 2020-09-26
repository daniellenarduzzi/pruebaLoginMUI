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

const useStyles = makeStyles((theme) => ({
    avatar: { 
      "&:hover": {
        backgroundColor: theme.palette.action.hover,
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
}))

function CustomAvatar() {
    const classes = useStyles()

    return (
        <Avatar classes={{
            root: classes.avatar,
         }}> 
            <LockOutlinedIcon />
         </Avatar>
    )
}



const Login = () => {
  const classes = useStyles();

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
              <Link href="#" color='inherit' variant="body2">
                {"Crear cuenta nueva"}
              </Link>
            </Grid>
          </Grid>
        </form>
        </ThemeProvider>
        <Box mt={8}>
        <Copyright />
        </Box>
      </div> 
    </Container>
  );
}

export default Login