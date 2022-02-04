import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setItems } from '../../redux/actions/ItemsActions';
import NavBar from '../NavBar';
import KidItemsCard from './KidItemsCard';

class KidItemsContainer extends Component {

    state = {
        kidsItems: this.props.items.filter(kids => kids.category_id === 6)
    }

    componentDidMount() {
        this.props.setItems()
    }


  render() {
    return <div className='main-body'>
        <NavBar />
        <h1>KIDS' CLOTHING</h1>
        <div className='content'>
            {this.state.kidsItems.map((i => <KidItemsCard key={i.id} {...i} />))}
        </div>
    </div>;
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
export default connect(mapStateToProps, mapDispatchToProps)(KidItemsContainer)
