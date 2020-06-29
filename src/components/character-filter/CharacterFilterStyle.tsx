import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 'fit-content',
      border: `1px solid ${theme.palette.divider}`,
      borderRadius: theme.shape.borderRadius,
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.secondary,
      marginBottom: '2rem',
      '& svg': {
        margin: theme.spacing(1.5),
      },
      '& hr': {
        margin: theme.spacing(0, 0.5),
      },
      '& span': {
        fontWeight: 700,
        fontSize: '1rem',
        margin: '1rem',

        [theme.breakpoints.down('sm')]: {
          fontSize: '1rem',
          margin: '0.3rem',
        },
      },
    },
  }),
)

export default useStyles
