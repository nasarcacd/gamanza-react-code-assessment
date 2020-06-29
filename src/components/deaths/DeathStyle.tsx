import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginTop: '1rem',
      marginLeft: '3rem',
      marginRight: '3rem',
      '& p': {
        color: '#686868',
      },

      [theme.breakpoints.down('sm')]: {
        marginLeft: '0rem',
        marginRight: '0rem',
      },
    }
  }),
)

export default useStyles
