import React from 'react';
import '../../css/WomenCard.css'

function WomenItemsCard(props) {
  return (
    <div className='container'>
            <div className='women-card'>
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
export default WomenItemsCard
