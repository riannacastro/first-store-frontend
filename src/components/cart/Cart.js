import React from 'react';

export default function Cart() {
  return <div>
      <ul>
          {props.cart.map(cartItem => {
              const item = props.items.find(i => i.id === cartItem)
              return <li key={cartItem}>{item.name}</li>
          })}
      </ul>
  </div>;
}

