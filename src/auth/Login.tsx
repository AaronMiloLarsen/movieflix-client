import React from 'react'
import {FormControl, InputLabel, Input, FormHelperText, Button, Container} from '@material-ui/core';

type LoginProps = {
    email: string;
    password: string;
    updateToken: any;
    sessionToken: any;
    getToken: any;
    setEmail: (e: any) => any;
    setPassword: (e: any) => any;
}
 
class Login extends React.Component<LoginProps, {}> {
    constructor(props: LoginProps) {
        super(props);
    }

    updateToken = (newToken: any) => {
        localStorage.setItem('token', newToken);
        this.setState({ sessionToken: newToken });
        console.log(newToken);
      };

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
                  alert("Login successful.")
                } else {
                  alert("Login failed.");
                }
                return res.json();
            })
            .then((data) => {this.updateToken(data.sessionToken)
            })
    }

    render() { 
        return (
            <div className='center'>
                
                <Container maxWidth="sm">
                <h3>Login</h3>
                <FormControl onSubmit={this.handleSubmit}>
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
                        <Button type="submit" variant="contained" color="secondary" >Signup</Button>
                </Container>
                
            </div>
        );
    }
}
 
export default Login;