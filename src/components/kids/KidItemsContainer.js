import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setItems } from '../../redux/actions/ItemsActions';
import KidItemsCard from './KidItemsCard';

class KidItemsContainer extends Component {


  render() {
    return <div>
        < KidItemsCard />
    </div>;
  }
}

function mapDispatchToProps(dispatch) {
    return {
        setItems: () => dispatch(setItems())
    }
}
export default connect(null, mapDispatchToProps)(KidItemsContainer)
