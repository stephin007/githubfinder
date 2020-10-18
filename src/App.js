import React, {Fragment, useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


import Navbar from './components/layout/Navbar'
import Alert from './components/layout/Alert'
import Users from './components/users/Users'
import User from './components/users/User'
import Search from './components/users/Search'
import About from './components/pages/About'

// import GithubContext from './context/github/githubContext'
import  GithubState from './context/github/GithubState'

import './App.css';

const App = ()=> {
  // const githubContext = useContext(GithubContext)
  const [alert, setAlert] = useState(null); 

  // useEffect(() => {
  //   githubContext.firstUsers()
  // } , [githubContext])


  const showAlert = (message, type) =>{
    setAlert({message, type})
    setTimeout(()=> setAlert(null), 3000)
  }

    return (
      <GithubState>
        <Router>
          <div >
            <Navbar title="Github Finder" icon="fab fa-github"/>
            <div className="container">
              <Alert alert={alert}/>
              <Switch>
                <Route exact path='/' render={props =>(
                  <Fragment>
                    <Search 
                      setAlert={showAlert} />
                    <Users />
                  </Fragment>
                )} />
                <Route exact path='/about' component={About}/>
                <Route exact path='/user/:login' component= {User}/>
              </Switch>
            </div>
          </div>
        </ Router> 
      </GithubState> 
    );
}

export default App;
