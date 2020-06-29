import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginLeft: '1rem',
      marginRight: '1rem',

      [theme.breakpoints.down('sm')]: {
        marginLeft: '0rem',
        marginRight: '0rem'
      }
    }
  }),
)

export default useStyles
