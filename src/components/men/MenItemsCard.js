import React from 'react';

function MenItemsCard(props) {
    return (
        <div className='container'>
            <div className='all-card'>
                <div className='imgBx'>
                    <img src={props.image} alt='men' />
                </div>
                <div className='contentBx'>
                    <h3>{props.name} - {props.price}</h3>
                    <br />
                    <div className='a'>
                    <h3>Buy Now</h3>
                    </div>
                </div>
            </div>
        </div>
      );
    }
export default MenItemsCard