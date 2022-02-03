import React from 'react';
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
                    <h3>Buy Now</h3>
                    </div>
                </div>
            </div>
        </div>
  );
}
export default ItemsCard
