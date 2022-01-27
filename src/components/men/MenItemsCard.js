import React from 'react';

function MenItemsCard(props) {
    return (
        <div>
          {props.name} - {props.price}
        </div>
      );
    }
export default MenItemsCard