import React from 'react';

const DonateTabMoney = ({ product, onPriceClick }) => {
    const { price } = product
    return (
        <div className=' mx-auto border hover:bg-yellow-300 border-slate-300'>
            <button onClick={() => onPriceClick(price)}>$<span>{price}</span></button>
        </div>
    );
};

export default DonateTabMoney;