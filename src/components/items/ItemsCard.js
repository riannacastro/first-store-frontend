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
                    {props.name} - {props.price}
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
