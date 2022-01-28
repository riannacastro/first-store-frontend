import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setItems } from '../../redux/actions/ItemsActions'
import WomenItemsCard from './WomenItemsCard'
import NavBar from '../NavBar'



class WomenItemsContainer extends Component {

    state = {
        womenItems: this.props.items.filter(women => women.category_id === 2)
    }

    componentDidMount() {
        this.props.setItems()
    }

    render() {
        return (
            <div className='main-body'>
                <NavBar />
              <h1>Women</h1>
                <div className='content'>
                    {this.state.womenItems.map((i => <WomenItemsCard key={i.id} {...i}/>))}
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
        setItems: () => dispatch(setItems())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WomenItemsContainer)