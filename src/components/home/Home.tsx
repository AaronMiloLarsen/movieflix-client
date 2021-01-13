import React from 'react';
import {Container, Button} from '@material-ui/core'

export interface Props {
    
}
 
export interface State {
    
}
 
class Home extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {};
    }
    render() { 
        return (  
            <div className="home">
                <div>
                    Welcome to the site!
                    <Button href='/user/login'>Login</Button>
                    <br />
                    <br />
                    <Button href='/user/signup'>Signup</Button>
                </div>
            </div>
        );
    }
}
 
export default Home;