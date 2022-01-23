import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../css/HomePage.css'

export default class HomePageCard extends Component {
    render() {
        return (
                <div className='homepage-card'>
                    <h1>Welcome! If you are a member, please sign in:</h1>
                    < br />
                    <Link id="signin-btn" to="/signin">Sign In</Link>
                </div>
        )
    }
}
