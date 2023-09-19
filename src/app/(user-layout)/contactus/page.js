
import Contact from '@/components/Contact/Contact';

import ContactBanner from '@/components/contactusBanner/ContactBanner';
import Locationbymap from '@/components/locatitionbymap/Locationbymap';
import TextToSpeech from '@/components/TextToSpeech/TextToSpeech';

import React from 'react';

export const metadata = {
	title: 'AidNAssist | Contact us',
	description: 'By Matrix Coders Unity',
  }
  

const Contactus = () => {
    return (
        <div classname="">
            <TextToSpeech text={"Welcome to Contact us"}></TextToSpeech>
            <ContactBanner></ContactBanner>
            <Contact></Contact>
            
            <Locationbymap></Locationbymap>
        </div>
    );
};

export default Contactus;