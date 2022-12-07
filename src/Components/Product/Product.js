import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'
//add to cart Button//
const Product = (props) => {
    // console.log(props);
    return (
        <div className='product'>
            <div>
                <img src={props.product.img} alt="" />
            </div>
            <div className='product-name'>
                <h3>{props.product.name}</h3>
                <br />
                <p> <small> Buy : {props.product.seller} </small> </p>
                <p>$ {props.product.price}</p>
                <br />
                <p> <small> Only : {props.product.stock} left in Stock- Order soon </small> </p>
                <button className='btn-cart'
                
                onClick={() => props.handallAddProduct(props.product)}
                >
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                <span>Add to cart</span>
                </button>
            </div>

        </div>
    );
};

export default Product;