import React from 'react'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import Homepage from './components/homepage'
import SignUp from './components/signUp'
import SignIn from './components/signIn'
import Profile from './components/profile'
import Messages from './components/messages'
import './App.css';

class App extends React.Component {
  render(){
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={Homepage}/>
            <Route path="/signUp" component={SignUp}/>
            <Route path="/signIn" component={SignIn}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/messages" component={Messages}/>
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
