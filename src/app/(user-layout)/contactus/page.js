
import Contact from '@/components/Contact/Contact';
import ContactBanner from '@/components/contactusBanner/ContactBanner';
import Locationbymap from '@/components/locatitionbymap/Locationbymap';

import React from 'react';

export const metadata = {
	title: 'AidNAssist | Contact us',
	description: 'By Matrix Coders Unity',
  }
  

const Contactus = () => {
    return (
        <div classname="">
            
            <ContactBanner></ContactBanner>
            <Contact></Contact>
            <Locationbymap></Locationbymap>
        </div>
    );
};

export default Contactus;