import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    let total = 0;
    for(let i = 0; i <cart.length; i++){
        const product = cart[i];
        total = parseFloat((total + product.price).toFixed(2));
    }
    const tax =parseFloat((total/10).toFixed(2));
    const grandTotal = parseFloat((total + tax).toFixed(2));
    return (
        <div>
            <h4>Order Summery</h4>
            <p>Items Ordered : {cart.length}</p>
            <h2>Product Price : {total}</h2>
            <p><strong>Vat + Tax : {tax}</strong></p>
            <h2>Total Price : {grandTotal}</h2>

        </div>
    );
};

export default Cart;