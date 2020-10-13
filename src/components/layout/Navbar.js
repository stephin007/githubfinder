import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

// const Navbar =({icon, title}) =>{ (you can send props directly here as well like so)
const Navbar = (props) => {
    // We can use the code from line 7-10 to set default props if we dont provide any props to the navbar 
    // component in the App.js file

    // static defaultProps={
    //     title: "Github Finder",
    //     icon:"fab fa-github"
    // }

    // We can use this following code from line 15-19 if we want to set a confirmed proptype for the props being passed.
    // if we chnge the proptypes say from string to array, it wont break the app but it will give error in the console.
    
        return (
            <div>
                <nav className="navbar bg-primary">
                    <h1>
                        <i className={props.icon} />{props.title}
                    </h1> 
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>   
                </nav>
            </div>
        )
}
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}


export default Navbar
