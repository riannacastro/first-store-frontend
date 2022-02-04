import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../css/Signin.css'

export default class Login extends Component {

    state = {
        username: "",
        password: ""
    }
    
    render() {
        return (
            <div className='signin'>
                <div className='member-shop'>
                    <h1>The Member Shop</h1>
                </div>
                <div className='signin-header'>
                    <h1>Welcome Back!</h1>
                </div>
                <form id="signin-form" onSubmit={this.handleSubmit}>
                    <h3>Please Sign In</h3>
                    <label>Username: </label>
                    <input type="text" name="username" onChange={this.handleChange} value={this.state.username} placeholder='username' required/> 
                    < br />
                    <label>Password: </label>
                    <input type="password" name="password" onChange={this.handleChange} value={this.state.username} placeholder='password' required/>
                    < br />
                    <input type="submit" />
                </form>
                <div className='signup-link'>
                    Not a member? <Link to="/signup">Sign up now!</Link>
                </div>
            </div>
        )
    }
}
