import React from 'react';

function ItemsCard(props) {
  return (
    <div>
      {props.name} - {props.price}
    </div>
  );
}
export default ItemsCard
