import { useState } from 'react'
import { makeStyles, ThemeProvider } from '@material-ui/core/styles'
import {Button, TextField, Container, AppBar, Toolbar, IconButton, Typography, Link} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close'
import theme from '@/themes/light'
import { useMutation, gql } from '@apollo/client';
import { useRouter } from 'next/router'
import { getErrorMessage } from '@/apolloUtils/form'

const useStyles = makeStyles((theme) => ({
    container: {
      height: '100vh',
      display: 'flex',
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
      },
      formContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        
        textAlign: 'center'
      },
      flexContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: '10px',
      },
      appBar: {
        position: 'fixed',
      },
      title: {
        marginLeft: theme.spacing(2),
        flex: 1,
      },
}))

const SIGNUP_MUTATION = gql`
  mutation signup($email: String!, $password: String!, $phone: String!, $name: String!)	{
    signup(input: {email: $email, password: $password, phone: $phone, name: $name}){
      id
    }
  }
`

const Register = () => {
    interface signupPayload {
      email: string
      password: string
      name: string
      phone: string
    }
    interface signupResponse {
      signup: {
        user : {
        id: string
      }}
    }

    const [signup, {error, loading, data}] = useMutation<signupResponse, signupPayload>(SIGNUP_MUTATION)
  
    const [errorMsg, setErrorMsg] = useState<false | string>(false)
    
    const router = useRouter()
  
    const handleSignup = async event => {
      event.preventDefault()
      const form = event.target
      const formData = new window.FormData(form)
      const email = formData.get('email') 
      const password = formData.get('password')
      const firstName = formData.get('firstName')
      const lastName = formData.get('lastName')
      const phone = formData.get('phone')
      form.reset()
      if(typeof email === 'string' && typeof password === 'string') {
        try {
          const {data} = await signup({ variables: {email, password, name: `${firstName} ${lastName}`, phone}})
          if (data && data.signup.id){
            router.push('/')
          }
        } catch (error) {
          setErrorMsg(getErrorMessage(error))
        }
      }
    }

    const classes = useStyles();
    
    return (
      <div className={classes.container}> 
        <ThemeProvider theme={theme}>
            <AppBar className={classes.appBar}> 
                <Toolbar>
                    <IconButton edge="start" color="inherit" href='login' aria-label="close">
                        <CloseIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Cuenta Nueva
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container className={classes.formContainer} maxWidth='xs'>
            <form
              onSubmitCapture={handleSignup}
            >
            <div className={classes.flexContainer}> 
              <TextField
                  color='primary'
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="firstName"
                  label="Nombre"
                  name="firstName"
                  autoFocus>
              </TextField>
              <TextField
                  color='primary'
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="lastName"
                  label="Apellido"
                  name="lastName"
                  autoFocus>                
              </TextField>  
              </div>
              <TextField
                  color='primary'
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  type='phone'
                  id="phone"
                  label="Número de teléfono"
                  name="phone"
                  autoFocus>
              </TextField>
              <TextField
                  color='primary'
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  type='email'
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
              {errorMsg && <p>{errorMsg}</p>}
              <Link href="login" color='inherit' variant="body2">
                ¿Ya tienes cuenta? Inicia sesión
              </Link>
            </form>
          </Container>
        </ThemeProvider>         
      </div>       
    )
}

export default Register