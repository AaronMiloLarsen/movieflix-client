import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import  { Button } from '@material-ui/core'

export interface Props {
    
}
 
export interface State {
    
}


class HomePage extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
       
    }

    welcomeStyle = {
        root: {
            // display:'flex',
            width: '100%',
            margin: 'auto',
            height: '100%'
        }
    }

    render() { 
        return (  
            <div style={this.welcomeStyle.root}>
                <h5>Welcome to the HomePage!</h5>
                 <br />
                <Button href='/user/login'>Login</Button>
                <br />
                <br />
                <Button href='/user/signup'>Signup</Button>
            </div>
        );
    }
}
 
export default HomePage;