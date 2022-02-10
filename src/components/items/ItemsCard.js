import React from 'react';
import '../../css/AllCard.css'

function ItemsCard(props) {

  const item = () => {
    props.handleClick(item.id)
  }

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
                    <button id="h3" onClick={handleClick}>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
  );
}
export default ItemsCard
