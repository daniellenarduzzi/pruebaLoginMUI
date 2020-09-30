import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
    submit: {
        margin: theme.spacing(3, 0, 2),
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
      },
      appBar: {
        position: 'relative',
      },
      title: {
        marginLeft: theme.spacing(2),
        flex: 1,
      }
}))

export default (props) => {
    const classes = useStyles();

    return (
        <Dialog fullScreen open={props.Op} onClose={() => props.Close()} TransitionComponent={props.Trans}>
            <AppBar className={classes.appBar}> 
                <Toolbar>
                    <IconButton edge="start" color="inherit" onClick={() => props.Close()} aria-label="close">
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
        
    )
}