import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setItems } from '../../redux/actions/ItemsActions';
import NavBar from '../NavBar';
import KidItemsCard from './KidItemsCard';

class KidItemsContainer extends Component {

    componentDidMount() {
        this.props.setItems()
    }


  render() {
    return <div>
        <NavBar />
        <h1>KIDS' CLOTHING</h1>
        <div>
            {this.props.items.map((i => <KidItemsCard key={i.id} {...i} />))}
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
