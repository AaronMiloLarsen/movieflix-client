import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import  { Button } from '@material-ui/core'


class HomePage extends React.Component {
   
    render() { 
        return (  
            <div className="app">
                 Welcome to the HomePage!
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