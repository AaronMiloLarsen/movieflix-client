import React from 'react';

import { Button, Grid, Typography } from '@material-ui/core'

import image from '../../assets/homeImage.png'


type Props = {

}

type States = {

}


class HomePage extends React.Component<Props, States> {
    constructor(props: Props) {
        super(props);

    }

    welcomeStyle = {
        root: {
            width: '100%',
            height: '100%',
        }
    }

    render() {
        return (
            <Grid container
                alignItems="center"
                alignContent="center"
                justify="center"
                style={this.welcomeStyle.root}
                className='homepage'>
                <Grid item xs={6}>
                    <Typography variant="h3" gutterBottom>
                        Welcome to Movieflix!
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Login or Signup for a free account to get started!
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <img src={image} width='auto' height='400px' className='homeImage' />
                </Grid>
                <Grid container
                    alignItems="center"
                    justify="center"
                    style={this.welcomeStyle.root} >
                    <Button href='/user/login' variant="contained" >Login</Button>
                    <br />
                    <br />
                    <Button href='/user/signup' variant="contained">Signup</Button>
                </Grid>
            </Grid>
        );
    }
}

export default HomePage;