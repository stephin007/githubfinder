import React, {Fragment, useState, useEffect, useContext} from 'react';
import axios from 'axios'
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

  const [users, setUsers] = useState([]); 
  const [user, setUser] = useState({}); 
  const [repos, setRepos] = useState([]); 
  const [loading, setLoading] = useState(false); 
  const [alert, setAlert] = useState(null); 

  // useEffect(() => {
  //   githubContext.firstUsers()
  // } , [githubContext])

  // Getting a single github User.
  const getUser = async (username) =>{
    setLoading(true)
    const res = await axios
    .get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)

    setUser(res.data)
    setLoading(false)
  }

  // Getting user Repos
  const getUserRepos = async (username) =>{
    setLoading(true)
    const res = await axios
    .get(`https://api.github.com/users/${username}/repos?per_page=10&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)

    setRepos(res.data)
    setLoading(false)
  }

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
                <Route exact path='/user/:login' render={props =>(
                  <User 
                    {...props} 
                    getUser={getUser} 
                    getUserRepos={getUserRepos} 
                    user={user} 
                    repos={repos}
                    loading={loading} />
                )} />
              </Switch>
            </div>
          </div>
        </ Router> 
      </GithubState> 
    );
}

export default App;
