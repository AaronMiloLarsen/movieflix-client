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
    updateToken: any;
    sessionToken: any;
    setFirstName: (e: any) => any;
    setLastName: (e: any) => any;
    setEmail: (e: any) => any;
    setPassword: (e: any) => any;
}



class Signup extends React.Component<SignupProps, {}> {
    constructor(props: SignupProps) {
        super(props);
    }

    handleSubmit = (event: any) => {
        event.preventDefault();
        fetch('http://localhost:3500/user/signup', {
            method: 'POST',
            body: JSON.stringify({
                user: {
                    firstname: this.props.firstName,
                    lastName: this.props.lastName,
                    email: this.props.email,
                    password: this.props.password
                }
            }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
            .then((res) => res.json())
            .then((data) => {
                this.props.updateToken(data.sessionToken)
            })
    };


    render() {
        return (
            <div>
                <Container maxWidth="sm">
                    {/* <ThemeProvider theme={theme}> */}
                    <h3>Signup</h3>
                    <FormControl onSubmit={this.handleSubmit}>
                        <InputLabel htmlFor="firstName">First Name</InputLabel>
                        <Input 
                        id="firstName"
                            className='firstName'
                            onChange={(e) => this.props.setFirstName(e.target.value)} value={this.props.firstName} />
                    </FormControl >
                    <br />
                    <FormControl onSubmit={this.handleSubmit}>
                        <InputLabel htmlFor="lastName">Last Name</InputLabel>
                        <Input 
                        id="lastName" 
                        className='lastName' 
                        onChange={(e) => this.props.setLastName(e.target.value)} 
                        value={this.props.lastName} />
                    </FormControl>
                    <br />
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
                    <Button type="submit" variant="contained" color="secondary" >Signup</Button>
                </Container>
                {/* </ThemeProvider> */}
            </div>
        );
    }
}

export default Signup;