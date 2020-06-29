import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
      backgroundColor: '#686868',
      paddingTop: '1rem',
      paddingBottom: '1rem',
      paddingLeft: '4rem',

      [theme.breakpoints.down('sm')]: {
        paddingLeft: '1rem',
      },
    },
    link: {
      color: "#f0f8ff",
      textDecoration: 'none',
      fontWeight: 700,
      marginRight: '1rem'
    }
  }),
)

export default useStyles
