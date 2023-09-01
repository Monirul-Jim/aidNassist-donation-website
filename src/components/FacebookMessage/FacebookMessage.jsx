'use client'
import React from 'react';
import { FacebookProvider, CustomChat } from 'react-facebook';
const FacebookMessage = () => {
    return (
        <FacebookProvider appId="6789381414458015" chatSupport>
        <CustomChat pageId="114770751720342" minimized={true}/>
      </FacebookProvider> 
    );
};

export default FacebookMessage;