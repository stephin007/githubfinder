import React, { useContext } from 'react'

import GithubContext from '../../context/github/githubContext'

import UserItem from './UserItem'

import Spinner from '../layout/Spinner'

const Users=()=> {
    const githubContext = useContext(GithubContext)

    const {loading, users} = githubContext

    if(loading){
        return <Spinner />
    }else {
        return (
            <div className="mobile grid-3">
                {users.map(user=>(
                <UserItem key={user.id} user={user} />
                ))}    
            </div>
        )
    }
}

export default Users
