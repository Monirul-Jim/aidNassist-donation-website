import React from 'react';

const DonateTabMoney = ({product,onPriceClick }) => {
    const {price}=product
    return (
        <div className='py-4 px-8  mx-auto border border-slate-300'>
        <button onClick={() => onPriceClick(price)}>$<span>{price}</span></button>
    </div>
    );
};

export default DonateTabMoney;