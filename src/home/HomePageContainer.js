import React, { Component } from 'react'
import HomePageCard from './HomePageCard'
import '.././css/HomePage.css'

export default class HomePageContainer extends Component {
    render() {
        return (
            <div>
                <div className='homepage-cont'>
                    <h1>The Member Shop</h1>
                </div>
                <HomePageCard />
            </div>
        )
    }
}
