import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class SignUpForm extends Component {

    state = {
        name: "",
        username: "",
        password: ""
    }


  render() {
    return <div>
        <div className='member-shop'>
            <h1>The Member Shop</h1>
        </div>
        <div className='signup-header'>
            <h1>Nice to meet you!</h1>
            <h2>Want to become a member?</h2>
        </div>
        <form id="signin-form" onSubmit={this.handleSubmit}>
            <h3> Sign up here!</h3>
            <label>Name: </label>
            <input type="text" name="name" onChange={this.handleChange} value={this.state.name} placeholder='John Doe'/> <br />
            <label>Username: </label>
            <input type="text" name="username" onChange={this.handleChange} value={this.state.username} placeholder='username' required /> <br />
            <label>Password: </label>
            <input type="password" name="password" onChange={this.handleChange} value={this.state.password} placeholder='password' required/> <br />
            <input type="submit" />
            <div className='signin-link'>
                <h3>Already a member? <Link to="/signin">Sign In</Link></h3>
            </div>
        </form>
    </div>;
  }
}
