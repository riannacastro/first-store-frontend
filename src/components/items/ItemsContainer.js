import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setItems } from '../../redux/actions/ItemsActions'
import ItemsCard from './ItemsCard'
import NavBar from '../NavBar'
import '../../css/Default.css'


class ItemsContainer extends Component {

    componentDidMount() {
        this.props.setItems()
    }


    render() {
        return (
            <div className='main-body'>
                <NavBar />
              <h1>ALL STREETWEAR</h1>
                <div className='content'>
                    {this.props.items.map((i => <ItemsCard key={i.id} handleClick={addToCart()} {...i}/>))}
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        items: state.items  
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setItems: () => dispatch(setItems()),
        addToCart: () => dispatch(addToCart())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemsContainer)