import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Header from '../src/components/home/Header';

import HomePage from './components/home/HomePage';
import UserHome from './components/home/UserHome'
import Auth from './auth/Auth';
import Footer from './components/home/Footer';
import Profile from './components/profile/Profile'
import Admin from './components/home/Admin'
import About from './components/home/About'
import { Button, Dialog, Modal } from '@material-ui/core';




type AppStates = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  sessionToken: string;
  redirect: null | string;
  redirectValue: string
  userId: string
}

class App extends React.Component<{} ,AppStates> {

  constructor(props: any) {
    super(props);
    this.state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    sessionToken:'',
    redirect: null,
    redirectValue: '',
    userId: ''
    }
    
  }


updateToken = (newToken: string, userId:string) => {
  localStorage.setItem('token', newToken);
  this.setState({ sessionToken: newToken, userId : userId });
  localStorage.setItem('userId', JSON.stringify(userId))
  console.log(newToken, userId);
};

clearToken = () => {
  localStorage.clear();
  this.setState({ sessionToken: '' });
};

getToken = () => {
  if (localStorage.getItem('token')) {
    this.setState({ sessionToken: localStorage.getItem('token') ||''  });
  } else {
    console.log('Login required.')
  }
};

componentDidMount() {
  this.getToken()
}

redirect = () => {
  this.setState({redirectValue: '/userhome'})
  console.log('Insert Redirect Here!')
  return (
    <>
        <Redirect to = '/banana'/>
    </>
  )
}


// MAKE AN ADMIN VIA POSTMAN
// WORK ON ADMIN PORTAL
// WORK ON READ ME FILE
// WORK ON HEROKU DEPLOYMENT

// alert('Silly User! You arent an Admin!')
//     this.setState({redirectValue: '/'})
//      if (this.state.redirectValue){
//       return <Redirect to = {this.state.redirectValue} />
//   }


  render() {
    
    return (

      <div className='app'>
        <div className="center">
        
        <Router>
          

          <Header 
          clearToken={this.clearToken}
          sessionToken={this.state.sessionToken}
          redirectValue={this.state.redirectValue}
          // adminChecker={this.adminChecker}
          />
        
            <Switch>

              
              <Route exact path ='/userhome'>
                <UserHome 
                sessionToken={this.state.sessionToken}
                // adminChecker={this.adminChecker} 
                />
              </Route>

              <Route path = "/user/">
                <Auth 
                redirectValue={this.state.redirectValue} 
                updateToken={this.updateToken} 
                redirect={this.redirect}/>
              </Route>

              <Route exact path="/">
                <HomePage />
              </Route>
              
              <Route exact path="/profile">
                <Profile 
                userId={this.state.userId}
                sessionToken={this.state.sessionToken} />
              </Route>

              <Route exact path="/admin">
                <Admin
                sessionToken={this.state.sessionToken}
                // adminChecker={this.adminChecker}  
                />
              </Route>

              <Route exact path="/about">
                <About />
              </Route>

            </Switch>

          </Router>

          <Footer />
        </div>
      </div>

    );
  }
    
};


export default App;

// adminChecker = () => {
//   if (localStorage.getItem('admin')) {
//      this.setState({redirectValue: '/admin'})
//      if (this.state.redirectValue){
//       return <Redirect to = {this.state.redirectValue} />
//   }
//   }
//   else {
//     this.render() {
//     return (
//       <Dialog open={true}>
//         <h3>Silly User! You aren't an Admin!</h3>
//         <Button href='/userhome'>Go Home!</Button>
//       </Dialog>
//     )
//     }
//   }
// }