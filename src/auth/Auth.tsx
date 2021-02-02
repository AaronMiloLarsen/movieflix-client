
import React from 'react';
import { BrowserRouter as Router, Route, Switch,  } from 'react-router-dom'

import Login from './Login';
import Signup from './Signup';



type AuthProps = {
  updateToken: (newToken:string, userId: string) => void;
  redirect: () => void,
  redirectValue: string,
  // adminChecker: (adminData:string) => void

}

type AuthStates = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    sessionToken: any;
    // updateToken: (newToken:string) => void;
    getToken: any;
    setFirstName: (e: any) => any;
    setLastName: (e: any) => any;
    setEmail: (e: any) => any;
    setPassword: (e: any) => any;
}


 
class Auth extends React.Component< AuthProps, AuthStates> {
    constructor(props: AuthProps) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            sessionToken: "",
            getToken: '',
            setFirstName: (e:any) => {
              this.setState({
                firstName: e
              })
            },
            setLastName: (e:any) => {
              this.setState({
                lastName: e
              })
            },
            setEmail: (e:any) => {
              this.setState({
                email: e
              })
            },
            setPassword: (e:any) => {
              this.setState({
                password: e
              })
            },
           
          }
        };

       



    render() { 
        return ( 
            <div>
                
                    <Switch>
                        <Route exaxt path='/user/login'>
                            <Login 
                            email = {this.state.email}
                            password = {this.state.password}
                            setEmail = {this.state.setEmail}
                            setPassword = {this.state.setPassword}
                            sessionToken = {this.state.sessionToken}
                            getToken={this.state.getToken}
                            updateToken = {this.props.updateToken}
                            redirect = {this.props.redirect}
                            redirectValue={this.props.redirectValue}
                            // adminChecker={this.props.adminChecker}
                            />
                        </Route>
                    {/* </Switch>
                </Router>
                <Router>
                    <Switch> */}
                        <Route exact path='/user/signup'>
                            <Signup 
                            firstName = {this.state.firstName}
                            lastName = {this.state.lastName}
                            email = {this.state.email}
                            password = {this.state.password}
                            setFirstName = {this.state.setFirstName}
                            setLastName = {this.state.setLastName}
                            setEmail = {this.state.setEmail}
                            setPassword = {this.state.setPassword}
                            sessionToken = {this.state.sessionToken}
                            updateToken = {this.props.updateToken}
                            redirect = {this.props.redirect}
                            redirectValue = {this.props.redirectValue}
                            
                            />
                        </Route>
                    </Switch>
              
            </div>
        );
    }
}
 
export default Auth;