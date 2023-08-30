import Store from '@/components/Store/Store';
import React from 'react';


export const metadata = {
	title: 'AidNAssist | Store',
	description: 'By Matrix Coders Unity',
  }
  

const StoreItems = () => {
    return (
        <div>
            <h2 className='text-5xl text-center mt-52'>Store</h2>
            <p className='text-sm text-center mt-3'>Buy Any of these & it will add as a donations</p>
            <Store/>
        </div>
    );
};

export default StoreItems;