import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
        },
      submit: {
        margin: theme.spacing(3, 0, 2),
      },
    }))

export default (props) => {
    const classes = useStyles()

    return (
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
              <Link onClick={() => props.Click()} color='inherit' variant="body2">
                {"Crear cuenta nueva"}
              </Link>                
            </Grid>
          </Grid>
        </form>
    )
}

