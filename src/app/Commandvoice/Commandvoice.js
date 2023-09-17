'use client'
import { useEffect, useState } from 'react';
import 'regenerator-runtime/runtime';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useClipboard from 'react-use-clipboard';
import { BsFillMicFill } from 'react-icons/bs';
// import { SiConvertio } from 'react-icons/si';
import robo from "../../../public/Gallery/robo.gif"
import Image from 'next/image';
import { Audio } from 'react-loader-spinner';

const Commandvoice = () => {
  const [copyTxt, setCopyTxt] = useState('');
  const [isCopied, setCopied] = useClipboard(copyTxt);
  const [isLoading, setLoading] = useState(false);

  const startListening = () => {
    setLoading(true); // Set loading to true when starting to listen
    SpeechRecognition.startListening({ continuous: true, language: 'en-In' });
  };

  const stopListening = () => {
    setLoading(false); // Set loading to false when stopping listening
    SpeechRecognition.stopListening();
  };

  const { transcript } = useSpeechRecognition();


  useEffect(() => {
    handleCommand(transcript);
  }, [transcript]);





  const handleCommand = (command) => {
    console.log("Cheak it Command", command)
    if (command === 'go to about') {
      window.location.href = '/about';
    }
    else if (command === 'go to contact') {
      window.location.href = '/contactus';
    }
    else if (command === 'go to home') {
      window.location.href = '/';
    }

    else if (command === 'go to feedback') {
      window.location.href = '/feedback';
    }

    else if (command === 'go to event') {
      window.location.href = '/event';
    }
    else if (command === 'go to store') {
      window.location.href = '/store-items';
    }
    else if (command === 'go to share') {
      window.location.href = '/share';
    }
    else if (command === 'go to aq') {
      window.location.href = '/faq';
    }
    else if (command === 'go to how we work') {
      window.location.href = '/howwework';
    }
    else if (command === 'go to blogs') {
      window.location.href = '/blog';
    }


    else if (command === 'copy text') {
      setCopyTxt(transcript);
      setCopied(true);
    }
  };


  // if (!browserSupportsSpeechRecognition) {
  //   alert("No Browser support Commander");
  //   return
  // }




  return (
    <>
      <div className=' text-center'>
        {/* <div className='flex justify-center items-center gap-2'>
          <h1 className='text-center'>
            Speech to Text Converter
          </h1>
          <SiConvertio />
        </div> */}
        {/* <p className='text-4xl text-center my-4 font-bold text-green-300'>Command for Change Route</p> */}
        <div onClick={() => setCopyTxt(transcript)}></div>
        <div className='justify-center flex mt-3'>

        <button
            className=' mb-2 rounded-full shadow-2xl flex items-center bg-green-400 text-white font-extrabold p-[13px]'
            onClick={isLoading ? stopListening : startListening} // Toggle between start and stop based on loading state
          >
            {isLoading ? (
              <Audio
              height="15"
              width="15"
              color="blue"
              ariaLabel="audio-loading"
              wrapperStyle={{}}
              wrapperClass="wrapper-class"
              visible={true}
            />
            ) : (
              <BsFillMicFill />
            )}
          </button>
          {/* <span><Image className='rounded-full border-4 border-green-400' width={100} height={100} src={robo} alt="No Image"></Image></span> */}

        </div>
      </div>
    </>
  );
};

export default Commandvoice;




