import React from 'react';

const ReviewItem = (props) => {
    const {name, price, shipping, quantity} = props.product;

    return (
        <div>
            <h1>Review Here {name}</h1>
        </div>
    );
};

export default ReviewItem;