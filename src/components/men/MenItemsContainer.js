import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setItems } from '../../redux/actions/ItemsActions'
import NavBar from '../NavBar'
import MenItemsCard from './MenItemsCard';
import '../../css/Container.css'


class MenItemsContainer extends Component {
    state = {
        MenItems: this.props.items.filter(men => men.category_id === 1)
    }

    componentDidMount() {
        this.props.setItems()
    }

    render() {
        return (
            <div className='main-body'>
                <NavBar />
                <h1>Men</h1>
                <div className='content'>
                {this.state.MenItems.map((i => <MenItemsCard key={i.id} {...i}/>))}
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

export default connect(mapStateToProps, mapDispatchToProps)(MenItemsContainer)