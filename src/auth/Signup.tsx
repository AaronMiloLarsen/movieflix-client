import React from 'react'
import { FormControl, InputLabel, Input, FormHelperText, ThemeProvider, Container, Button } from '@material-ui/core';


// const theme = createMuiTheme({
//     props: {
//       FormControl,
//       MuiButtonBase: {
//         variant: 'filled',
//         disableRipple: true,
//       },
//     },
//   });

type SignupProps = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    updateToken: (newToken: string) => void;
    sessionToken: any;
    setFirstName: (e: any) => any;
    setLastName: (e: any) => any;
    setEmail: (e: any) => any;
    setPassword: (e: any) => any;
}

type SignupStates = {
    updateToken: (newToken: string) => void;
}


//fetch then returns object interface

class Signup extends React.Component<SignupProps, SignupStates> {
    constructor(props: SignupProps) {
        super(props);
       
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
              alert("Signup Successful!")
            } else {
              alert("Signup Failed!");
            }
            console.log(res)
            return res.json();
            
        })
        .then((data) => {
                console.log(data)
                this.props.updateToken(data.sessionToken)
            })
    };
    

    render() {
        return (
            <div>
                <Container maxWidth="sm">
                    <h3>Signup</h3>
                    <form onSubmit = {this.handleSubmit}>
                        <label htmlFor="firstName">First Name:</label>
                        <br />
                        <input 
                            id="firstName"
                            className='firstName'
                            onChange={(e) => this.props.setFirstName(e.target.value)} 
                            value={this.props.firstName}/>
                        <br />
                        <label htmlFor="lastName">Last Name:</label>
                        <br />
                        <input
                            id="lastName" 
                            className='lastName' 
                            onChange={(e) => this.props.setLastName(e.target.value)} 
                            value={this.props.lastName}/>
                        <br />
                        <label htmlFor="email">Email:</label>
                        <br />
                        <input
                            id="email" 
                            className='email' 
                            onChange={(e) => this.props.setEmail(e.target.value)} 
                            value={this.props.email}/>
                        <br />
                        <label htmlFor="password">Password:</label>
                        <br />
                        <input
                            id="password"  
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

export default Signup;


                    // <FormControl onSubmit={this.handleSubmit}>
                    //     <InputLabel htmlFor="firstName">First Name</InputLabel>
                    //     <Input 
                    //     id="firstName"
                    //     className='firstName'
                    //     onChange={(e) => this.props.setFirstName(e.target.value)} 
                    //     value={this.props.firstName} />
                    // </FormControl >
                    // <br />
                    // <FormControl onSubmit={this.handleSubmit}>
                    //     <InputLabel htmlFor="lastName">Last Name</InputLabel>
                    //     <Input 
                    //     id="lastName" 
                    //     className='lastName' 
                    //     onChange={(e) => this.props.setLastName(e.target.value)} 
                    //     value={this.props.lastName} />
                    // </FormControl>
                    // <br />
                    // <FormControl onSubmit={this.handleSubmit}>
                    //     <InputLabel htmlFor="email">Email Address</InputLabel>
                    //     <Input 
                    //     id="email" 
                    //     aria-describedby="my-helper-text" 
                    //     className='email' 
                    //     onChange={(e) => this.props.setEmail(e.target.value)} 
                    //     value={this.props.email} />
                    //     <FormHelperText id="my-helper-text">We'll never share your email.
                    //     </FormHelperText>
                    // </FormControl >
                    // <br />
                    // <FormControl onSubmit={this.handleSubmit}>
                    //     <InputLabel htmlFor="password">Password</InputLabel>
                    //     <Input 
                    //     id="password" 
                    //     aria-describedby="my-helper-text" 
                    //     className='password' 
                    //     onChange={(e) => this.props.setPassword(e.target.value)} 
                    //     value={this.props.password} />
                    //     <FormHelperText id="my-helper-text"> Don't forget this!
                    //     </FormHelperText>
                    //     <Button type="submit" variant="contained" color="secondary" >Signup</Button>
                    // </FormControl>