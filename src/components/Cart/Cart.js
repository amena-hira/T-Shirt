import React from 'react';

const Cart = ({cart, handleRemoveItem}) => {
    let message ;
    if(cart.length === 0){
        message = <p>Please buy at least one item</p>
    }
    else{
        message = <p>Thanks for buying</p>
    }
    return (
        <div>
            <h3>Order Summary</h3>
            <h5>Order Quantity: {cart.length}</h5>
            {
                cart.map(tshirt => <p>
                    {tshirt.name}
                    <button onClick={() => handleRemoveItem(tshirt)}>X</button>
                </p>)
            }
            {
                message
            }
            {
                cart.length === 3 ? <p>3 Jonk gift deo</p> : <p>buy and buy</p>
            }
        </div>
    );
};

export default Cart;

/* 
conditional rendering
1. use element in a variable and then use if-else to set value
2. ternary operation condition ? true: false

*/