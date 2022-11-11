import React from 'react';
import './Cart.css';

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
            <h3 className={cart.length === 2 ? 'orange' : 'purple'}>Order Summary</h3>
            <h5 className={`bold ${cart.length === 2 ? 'green' : 'orange'}`}>Order Quantity: {cart.length}</h5>
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
            <p>And Operator</p>
            {
                cart.length === 2 && <h2>Double Items</h2>
            }
            <p>OR Operator</p>
            {
                cart.length === 4 || <p>4 items no</p>
            }
        </div>
    );
};

export default Cart;

/* 
conditional rendering
1. use element in a variable and then use if-else to set value
2. ternary operation condition ? true: false
3. && operator (if condition is true i want to display something)
4. || operator (if condition is false, i want to display something)
*/