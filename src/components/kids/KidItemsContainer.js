import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setItems } from '../../redux/actions/ItemsActions';
import KidItemsCard from './KidItemsCard';

class KidItemsContainer extends Component {

    componentDidMount() {
        
    }


  render() {
    return <div>
        < KidItemsCard />
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
