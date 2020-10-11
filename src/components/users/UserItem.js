import React from 'react'
import PropTypes from 'prop-types'


const UserItem =({user:{login, avatar_url, html_url}})=> {
// const UserItem =(props)=> { (you can use props directly here and then you have to do the line as given below on line 21 or you can do as shown above)
    // You can use a constructor to initailise class, but that is outdated now we can just initialise the state as shown from line 14-19
    // constructor(){
    //     super();
    //     this.state={
    //         id:'id',
    //         login:'mojombo',
    //         avatar_url:'https://avatars0.githubusercontent.com/u/1?v=4',
    //         html_url:'https://github.com/mojombo'
    // }
// }
    // state={
    //     id:'id',
    //     login:'mojombo',
    //     avatar_url:'https://avatars0.githubusercontent.com/u/1?v=4',
    //     html_url:'https://github.com/mojombo'
    // }
        return (
            <div className="card text-center">
              <img src={avatar_url} alt="" className="round-img" style={{width:"60px"}}/> 
              <h3>{login}</h3>
              <div>
                  <a href={html_url} target="_blank" without rel="noopener noreferrer" className="btn btn-dark btn-sm my-1">
                      More
                  </a>
              </div>
            </div>
        )
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired
}

export default UserItem
