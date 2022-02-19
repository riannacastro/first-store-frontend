import React, { Component } from 'react';
import { bindActionCreators } from 'redux';

export default class Cart extends Component {

    state = {
        items: [
            {
                name: shirt,
                price: 20
            },
            {
                name: boots,
                price: 49
            }
        ],
        total: 0
    }


  render() {
    return <div>
        {this.state.total}
    </div>;
  }
}

