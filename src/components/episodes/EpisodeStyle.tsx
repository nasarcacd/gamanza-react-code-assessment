import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '70%',
      flexGrow: 1,
      marginTop: '3rem',
      marginLeft: '3rem',
      marginRight: '3rem',
      '& p': {
        color: '#686868',
      },

      [theme.breakpoints.down('sm')]: {
        width: '90%',
        marginTop: '1rem',
        marginLeft: '5%',
        paddingRight: '5%',
      },
    },
  }),
)

export default useStyles
