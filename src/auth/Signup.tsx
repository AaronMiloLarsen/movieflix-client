import React from 'react'

import { Redirect } from 'react-router-dom'

import {Button, Container, TextField} from '@material-ui/core';


type SignupProps = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    updateToken: (newToken: string, userId: string) => void;
    sessionToken: any;
    setFirstName: (e: any) => any;
    setLastName: (e: any) => any;
    setEmail: (e: any) => any;
    setPassword: (e: any) => any;
    redirect: () => void;
    redirectValue: string
}

type SignupStates = {
    updateToken: (newToken: string) => void;
    redirectValue: null | string;
    hidden: boolean
}

class Signup extends React.Component<SignupProps, SignupStates> {
    constructor(props: SignupProps) {
        super(props);
        this.state = {
            updateToken: (any) => any,
            redirectValue: null,
            hidden:true
        }
    }

    handleSubmit = (event: any) => {
        event.preventDefault();
        fetch(`http://localhost:3500/user/signup`, {
            method: 'POST',
            body: JSON.stringify({
                user: {
                    firstName: this.props.firstName,
                    lastName: this.props.lastName,
                    email: this.props.email,
                    password: this.props.password
                }
            }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        .then((res) => {
            if (res.status === 200) {
              console.log("Signup Successful!")
            } else {
              console.log("Signup Failed!");
            }
            console.log(res)
            return res.json();
            
        })
        .then((data) => {
                console.log(data)
                this.props.updateToken(data.sessionToken, data.user.id)
                this.setState({redirectValue: '/userhome'})
            })
    };

    toggleShow = () => {
        this.setState({hidden: !this.state.hidden})
    }
    

    render() {
        if (this.state.redirectValue){
            return <Redirect to = {this.state.redirectValue} />
        }
        return (
            <div>
                <Container maxWidth="sm">
                    <h3>Signup</h3>
                    <form onSubmit = {this.handleSubmit}>
                        
                        <br />
                        <TextField
                            label="First Name" 
                            id="firstName"
                            className='firstName'
                            onChange={(e) => this.props.setFirstName(e.target.value)} 
                            value={this.props.firstName}/>
                        <br />
                        
                        <br />
                        <TextField
                            label="Last Name" 
                            id="lastName" 
                            className='lastName' 
                            onChange={(e) => this.props.setLastName(e.target.value)} 
                            value={this.props.lastName}/>
                        <br />
                        
                        <br />
                        <TextField
                            label="Email"  
                            id="email" 
                            className='email' 
                            onChange={(e) => this.props.setEmail(e.target.value)} 
                            value={this.props.email}/>
                        <br />
                        
                        <br />
                        <TextField
                            type={this.state.hidden ? 'password' : 'text'}
                            label="Password" 
                            id="password"  
                            className='password' 
                            onChange={(e) => this.props.setPassword(e.target.value)} 
                            value={this.props.password}/>
                        <br />
                        <Button type="submit" value="Submit">Submit </Button>
                    </form> 
                </Container>
            </div>
        );
    }
}

export default Signup;