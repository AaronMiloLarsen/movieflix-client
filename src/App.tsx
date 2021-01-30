import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Header from '../src/components/home/Header';

import HomePage from './components/home/HomePage';
import UserHome from './components/home/UserHome'
import Auth from './auth/Auth';
import Footer from './components/home/Footer';



type AppStates = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  sessionToken: string;
  redirect: null | string;
  redirectValue: string
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
    }
    
  }


updateToken = (newToken: any) => {
  localStorage.setItem('token', newToken);
  this.setState({ sessionToken: newToken });
  console.log(newToken);
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

// storeId = (id:any) => {
  
//   localStorage.setItem('userId', id)
// }

  render() {
    return (

      <div className='app'>
        <div className="center">
        
        <Router>

          <Header 
          //PROFILE BUTTON WILL GO HERE AS WELL AS CLEARTOKEN() FOR LOGOUT
          />
        
            <Switch>

              
              <Route exact path ='/userhome'>
               
                  <UserHome sessionToken={this.state.sessionToken}/>
                 
              </Route>

              <Route path = "/user/">
                <Auth redirectValue={this.state.redirectValue} updateToken={this.updateToken} redirect={this.redirect}/>
              </Route>

              <Route exact path="/">
                <HomePage />
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
