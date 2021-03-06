import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


import Navbar from './components/layout/Navbar'
import Alert from './components/layout/Alert'
import User from './components/users/User'
import About from './components/pages/About'
import Home from './components/pages/Home'
import NotFound from './components/pages/Notfound'

// import GithubContext from './context/github/githubContext'
import  GithubState from './context/github/GithubState'
import  AlertState from './context/alert/AlertState'

import './App.css';

const App = ()=> {
  // const githubContext = useContext(GithubContext)

  // useEffect(() => {
  //   githubContext.firstUsers()
  // } , [githubContext])

    return (
      <GithubState>
        <AlertState>
          <Router>
            <div >
              <Navbar title="Github Finder" icon="fab fa-github"/>
              <div className="container">
                <Alert />
                <Switch>
                  <Route exact path='/' component={Home}/>
                  <Route exact path='/about' component={About}/>
                  <Route exact path='/user/:login' component= {User}/>
                  <Route component= {NotFound}/>
                </Switch>
              </div>
            </div>
          </ Router>
        </AlertState>   
      </GithubState> 
    );
}

export default App;
