import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from '../src/components/home/Header';
import SideBar from './components/sidebar/SideBar'
import HomePage from './components/home/HomePage';
import Auth from './auth/Auth';

// type AppProps = {
  
  
// }

type AppStates = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  sessionToken: string;
}
//   setFirstName: (e: any) => any;
//   setLastName: (e: any) => any;
//   setEmail: (e: any) => any;
//   setPassword: (e: any) => any;
// }

// type AppProps = {
//   updateToken?: any,
//   getToken?: any;
//   clearToken?: any;
//   sessionToken?: any;
// }

class App extends React.Component<{} ,AppStates> {

  constructor(props: any) {
    super(props);
    this.state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    sessionToken: '',
    }
    
  }
//   constructor(props:AppProps) {
//     super(props);
//     this.state = {
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     sessionToken: "",
//     setFirstName: (e:any) => {
//       this.setState({
//         firstName: e
//       })
//     },
//     setLastName: (e:any) => {
//       this.setState({
//         lastName: e
//       })
//     },
//     setEmail: (e:any) => {
//       this.setState({
//         email: e
//       })
//     },
//     setPassword: (e:any) => {
//       this.setState({
//         password: e
//       })
//     },
   
//   }
// }

getToken = () => {
  if (localStorage.getItem('token')) {
    this.setState({ sessionToken: localStorage.getItem('token') ||''  });
  }
};

updateToken = (newToken: any) => {
  localStorage.setItem('token', newToken);
  this.setState({ sessionToken: newToken });
  console.log(newToken);
};

clearToken = () => {
  localStorage.clear();
  this.setState({ sessionToken: '' });
};

  render() {
    return (

      <div className='app'>
        <div className="center">
        <Header />
        <SideBar />
        <Router>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route>
                <Auth updateToken={this.updateToken}/>
                {/* <Auth /> */}
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
      

    );
  }
    
};


export default App;
