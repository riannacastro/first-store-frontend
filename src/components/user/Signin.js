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
                    <h1>Welcome Back!</h1>
                <form id="signin-form" onSubmit={this.handleSubmit}>
                    <label>Username: </label>
                    <input type="text" name="username" onChange={this.handleChange} value={this.state.username} placeholder='username' required/> 
                    < br />
                    <label>Password: </label>
                    <input type="password" name="password" onChange={this.handleChange} value={this.state.username} placeholder='password' required/>
                    < br />
                    <input type="submit" />
                </form>
                Not a member? <Link to="/signup">Sign up now!</Link>
            </div>
        )
    }
}