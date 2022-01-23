import React, { Component } from 'react'

export default class Login extends Component {

    state = {
        username: "",
        password: ""
    }
    render() {
        return (
            <div>
                <h1>Welcome Back!</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Username: </label>
                    <input type="text" name="username" onChange={this.handleChange} value={this.state.username} required/> 
                    < br />
                    <label>Password: </label>
                    <input type="password" name="password" onChange={this.handleChange} value={this.state.username} required/>
                    < br />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}
