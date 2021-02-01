import React from 'react'
import {Container} from '@material-ui/core';

import { Redirect, } from 'react-router-dom'

type LoginProps = {
    email: string;
    password: string;
    updateToken: (newToken:string, userId:string) => void;
    sessionToken: any;
    getToken: any;
    setEmail: (e: any) => any;
    setPassword: (e: any) => any;
    redirect: () => void
    redirectValue: string
}

 
class Login extends React.Component<LoginProps, {redirectValue: null|string} > {
    constructor(props: LoginProps) {
        super(props);
        this.state = {
            redirectValue: null
        }
    }

    // updateToken = (newToken: any) => {
    //     localStorage.setItem('token', newToken);
    //     this.setState({ sessionToken: newToken });
    //     console.log(newToken);
    //   };

    // history = useHistory()

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
                // this.props.redirect()
                console.log(data.sessionToken)
                this.setState({redirectValue: '/userhome'})
                // this.props.history.push('/testhome')
            })
    }


    

    render() { 
        if (this.state.redirectValue){
            return <Redirect to = {this.state.redirectValue} />
        }
        return (
            <div className='center'>
                
                <Container maxWidth="sm">
                <h3>Login</h3>
                
                <form onSubmit = {this.handleSubmit}>
               
                <label htmlFor="email">Email:</label>
                <br />
                <input id="email" 
                        // aria-describedby="my-helper-text" 
                        className='email' 
                        onChange={(e) => this.props.setEmail(e.target.value)} 
                        value={this.props.email}/>

                <br />
                <label htmlFor="password">Password:</label>
                <br />
                <input id="password" 
                        // aria-describedby="my-helper-text" 
                        className='password' 
                        onChange={(e) => this.props.setPassword(e.target.value)} 
                        value={this.props.password}/>
                <br />
                <input type="submit" value="Submit" />
                </form> 
                </Container>
                
            </div>
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