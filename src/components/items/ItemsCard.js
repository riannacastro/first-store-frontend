import React from 'react';
import { connect } from 'react-redux';
import '../../css/AllCard.css'

function ItemsCard(props) {


  return (
    <div className='container'>
            <div className='all-card'>
              <div className='imgBx'>
                <img src={props.image} alt='men' />
            </div>
                <div className='contentBx'>
                    <h2>{props.name} - {props.price}</h2>
                    <br />
                    <div className='a'>
                    <button id="h3" onClick={(id) => props.addToCart(id)}>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
  );
}
export default (ItemsCard)
