import React from 'react';
import { connect } from 'react-redux';

import { CollectionItemContainer, ImageContainer, CollectionFooterContainer, 
    NameContainer, PriceContainer } from './collection-item.styles';
import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';

const CollectionItem = ({item, addItem }) => {
    const { name, price, imageUrl } = item;
    return (
    <CollectionItemContainer>
        <ImageContainer
        style={{
            backgroundImage: `url(${imageUrl})`}} />
        <CollectionFooterContainer>
            <NameContainer>{name}</NameContainer>
            <PriceContainer>{price}€</PriceContainer>
        </CollectionFooterContainer>
        <CustomButton onClick={()=> addItem(item)} inverted='true'>Add to cart</CustomButton>
    </CollectionItemContainer>);
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);