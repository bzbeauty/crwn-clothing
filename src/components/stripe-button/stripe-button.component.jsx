import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IVD9fAzehvykSUrww7xBR8IvNFZHQADScPdh92LwbzSKGWm0zsSzkBXnzuqQGmoWO4xkERDj6Rq4aoxVK3x9Pwt00suI0GhhI';

const onToken = token => {
    console.log(token);
    alert('Payment Successful');
}

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing GmbH'
            billingAddress
            shippingAddress
            currency="EUR"
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is ${price}€`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton;