import React from 'react';

import { CartItemContainer, ItemDetails, ItemName } from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity }}) => (
    <CartItemContainer>
        <img src={imageUrl} alt='item' />
        <ItemDetails>
            <ItemName>{name}</ItemName>
            <span className='price'>{quantity} x {price}€</span>
        </ItemDetails>
    </CartItemContainer>
);

export default CartItem;