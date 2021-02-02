import React from 'react';

import  { Button, Grid } from '@material-ui/core'

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
            display:'flex',
            width: '100vw',
            margin: 'auto',
            height: '100%',
        }
    }

    render() { 
        return (  
            <Grid 
            alignItems="center"
            justify="center"
            style={this.welcomeStyle.root} 
            className='homepage'>
                <h5>Welcome to the HomePage!</h5>
                <img src={image} width='400px' height='300px'/>
                 <br />
                <Button href='/user/login'>Login</Button>
                <br />
                <br />
                <Button href='/user/signup'>Signup</Button>
            </Grid>
        );
    }
}
 
export default HomePage;