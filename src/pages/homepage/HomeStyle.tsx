import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginTop: '4rem',
      paddingLeft: '4rem',

      [theme.breakpoints.down('sm')]: {
        marginTop: '2rem',
        paddingLeft: '1rem',
      },
    }
  }),
)

export default useStyles
