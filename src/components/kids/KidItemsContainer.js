import React, { Component } from 'react';
import { connect } from 'react-redux';
import KidItemsCard from './KidItemsCard';

class KidItemsContainer extends Component {


  render() {
    return <div>
        < KidItemsCard />
    </div>;
  }
}
export default connect()(KidItemsContainer)
