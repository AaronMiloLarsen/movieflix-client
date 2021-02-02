import React from 'react'
import {Button, Container, Grid, TextField} from '@material-ui/core';

import { Redirect, } from 'react-router-dom'
import { exit } from 'process';

type LoginProps = {
    email: string;
    password: string;
    updateToken: (newToken:string, userId:string) => void;
    sessionToken: any;
    getToken: any;
    setEmail: (e: any) => any;
    setPassword: (e: any) => any;
    redirect: () => void
    redirectValue: string;
}

type LoginStates = {
    hidden: boolean
    redirectValue: null|string
}

 
class Login extends React.Component<LoginProps, LoginStates > {
    constructor(props: LoginProps) {
        super(props);
        this.state = {
            redirectValue: null,
            hidden: true
        }
    }

    handleSubmit = (event:any) => {
        event.preventDefault();
        fetch('http://localhost:3500/user/login', {
            method: 'POST',
            body: JSON.stringify({
                user: {
                    email: this.props.email,
                    password: this.props.password
                }
            }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
            // .then((res) => res.json())
            .then((res) => {
                if (res.status === 200) {
                  console.log("Login successful.")
                  
                } else {
                  console.log("Login failed.");
                
                }
                return res.json();
            })
            .then((data) => {
                this.props.updateToken(data.sessionToken, data.user.id)
                console.log(data.sessionToken)
                if (data.user.admin === true){
                    localStorage.setItem('admin', 'true')
                }
                this.setState({redirectValue: '/userhome'})
                
            })
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
        if (this.state.redirectValue){
            return <Redirect to = {this.state.redirectValue} />
        }
        return (
            <Grid 
            style={this.welcomeStyle.root}
            className='homepage'
            alignItems="center"
            justify="center"
            >
                
                
                <h3>Login</h3>
                
                <form onSubmit = {this.handleSubmit}>
               
                <br />
                <TextField 
                label="email"
                id="email"  
                className='email'
                onChange={(e) => this.props.setEmail(e.target.value)} 
                value={this.props.email}/>

                <br />
                
                <br />
                <TextField
                    label="password" 
                    id="password" 
                    type={this.state.hidden ? 'password' : 'text'}
                    className='password' 
                    onChange={(e) => this.props.setPassword(e.target.value)} 
                    value={this.props.password}/>
                    {/* <Button onClick={(e) => this.toggleShow}>Show / Hide</Button> */}
                <br />
                <br/>
                <Button type="submit" value="Submit"> Submit</Button>
                </form> 
                
                
            </Grid>
        );
    }
}
 
export default Login;

{/* <FormControl onSubmit={this.handleSubmit}>
                        <InputLabel htmlFor="email">Email Address</InputLabel>
                        <Input 
                        id="email" 
                        aria-describedby="my-helper-text" 
                        className='email' 
                        onChange={(e) => this.props.setEmail(e.target.value)} 
                        value={this.props.email} />
                        <FormHelperText id="my-helper-text">We'll never share your email.
                        </FormHelperText>
                    </FormControl >
                    <br />
                    <FormControl onSubmit={this.handleSubmit}>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input 
                        id="password" 
                        aria-describedby="my-helper-text" 
                        className='password' 
                        onChange={(e) => this.props.setPassword(e.target.value)} 
                        value={this.props.password} />
                        <FormHelperText id="my-helper-text"> Don't forget this!
                        </FormHelperText>
                    </FormControl>
                        <br />
                        <Button type="submit" variant="contained" color="secondary" >Signup</Button> */}