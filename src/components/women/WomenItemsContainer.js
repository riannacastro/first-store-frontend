import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setItems } from '../../redux/actions/ItemsActions'
import WomenItemsCard from './WomenItemsCard'
import NavBar from '../NavBar'
import '../../css/Default.css'


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
              {this.state.womenItems.map((i => <WomenItemsCard key={i.id} {...i}/>))}
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