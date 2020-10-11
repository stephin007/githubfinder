import React, { Component } from 'react'
import PropTypes from 'prop-types'


export class Navbar extends Component {
    // We can use the code from line 7-10 to set default props if we dont provide any props to the navbar 
    // component in the App.js file

    // static defaultProps={
    //     title: "Github Finder",
    //     icon:"fab fa-github"
    // }

    // We can use this following code from line 15-19 if we want to set a confirmed proptype for the props being passed.
    // if we chnge the proptypes say from string to array, it wont break the app but it will give error in the console.
    // static propTypes = {
    //     title: PropTypes.string.isRequired,
    //     icon: PropTypes.string.isRequired
    // }
    render() {
        return (
            <div>
                <h1>
                    <i className={this.props.icon} />
                    {this.props.title}
                </h1>
            </div>
        )
    }
}

export default Navbar
