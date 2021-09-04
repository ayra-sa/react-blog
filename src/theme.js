import TextField from '@material-ui/core/TextField';
import { alpha, createTheme, makeStyles, withStyles } from '@material-ui/core/styles';

export const theme = createTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

export const useStyles = makeStyles((theme) => ({
      root: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        width: 300,
        placeContent: 'center',
      },
      login: {
        display: 'flex',
        placeContent: 'center',
        alignItems: 'center',
        height: '90vh',
        flexDirection: 'column',
      },      
      margin: {
        margin: theme.spacing(1),
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
        marginTop: 30,
      },
      grow: {
        flexGrow: 1,
      },
      right: {
        display: 'flex',
        alignItems: 'center',
        color: '#fff',
      },
      search: {
        flex: 1,
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: 'auto',
        },
      },
      inputRoot: {
        color: 'inherit',
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(2)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
          width: '20ch',
        },
      },
      mainFeaturedPost: {
        position: 'relative',
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4),
        // backgroundImage: `url(${url})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      },
      img: {
        maxWidth: '100%',
        height: 'auto',
      },
      blog: {
        width: '95%',
        margin: '0 auto',
      },
      flex: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: theme.spacing(3),
        // '& > *': {
        //   margin: theme.spacing(1),
        //   width: theme.spacing(16),
        //   height: theme.spacing(16),
        // },
        },
      overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,.3)',
      },
      mainFeaturedPostContent: {
        position: 'relative',
        padding: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
          padding: theme.spacing(6),
          paddingRight: 0,
        },
      },
      load: {
        display: 'flex',
        '& > * + *': {
        marginLeft: theme.spacing(2),
      }
    },
  }));

export const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: 'green',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'green',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'red',
        },
        '&:hover fieldset': {
          borderColor: 'yellow',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'green',
        },
      },
    },
  })(TextField);