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
              <h1>All Items</h1>
              {this.props.items.map((i => <ItemsCard key={i.id} {...i}/>))}
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
        setItems: () => dispatch(setItems())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemsContainer)