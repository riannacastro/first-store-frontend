import React, { Component } from 'react'
import NavBar from '../NavBar'
import '../../css/Default.css'

export default class ItemsContainer extends Component {
    render() {
        return (
            <div className='main-body'>
                <NavBar />
              <h1>All Items</h1>
            </div>
        )
    }
}
