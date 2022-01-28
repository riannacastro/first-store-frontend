import React from 'react';

function MenItemsCard(props) {
    return (
        <div className='container'>
            <div className='card'>
                <div className='contentBx'>
                    {props.name} - {props.price}
                    <div className='a'>
                    <h3>Buy Now</h3>
                    </div>
                </div>
            </div>
        </div>
      );
    }
export default MenItemsCard