import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
    palette: {
        primary: {main: '#e91e63'},
        secondary: {main:'#1e88e5'},
      },
      status: {
        danger: 'orange',
      },
      overrides: {
        MuiButton: {
          raisedSecondary: {
            color: 'white',
          },
        },
      }
});



export const Buttons = ({closemodal, User}) => {

    if(!User)
    return (
        <Fragment>
            <Button variant="contained" color="primary">
            <Link to="">Connexion</Link>
            </Button>
            <Button variant="contained" color="secondary" onClick={closemodal}>
            S'inscrire
            {/* <Link to="/parisbyme/compte/se-connecter">S'inscrire</Link> */}
            </Button>
        </Fragment>
    )   
};

export const UserSign = ({modal}) => {
    return(
        <MuiThemeProvider theme={theme}>
            <Buttons closemodal={modal}/>
        </MuiThemeProvider>
    )
};