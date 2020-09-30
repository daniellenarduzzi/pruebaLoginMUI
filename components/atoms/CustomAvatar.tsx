import Avatar from '@material-ui/core/Avatar'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    avatar: { 
      "&:hover": {
        backgroundColor: '#000a12',
      },
        backgroundColor: theme.palette.primary.main,
        margin: theme.spacing(1),        
    },

}))

export default () => {
    const classes = useStyles()

    return (
        <Avatar classes={{root: classes.avatar}}> 
            <LockOutlinedIcon />
         </Avatar>
    )
}