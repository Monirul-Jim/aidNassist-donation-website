'use client'
import { useState } from "react";
import FacebookMessage from "../FacebookMessage/FacebookMessage";
import WhatsappAPK from "../whatsapp/Whatsapp";

const MessagingButton = () => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    return (
        <div className="fixed bottom-0 right-0 mb-5 mr-5">
            <button
                onClick={handleClick}
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full shadow-md transition duration-300"
            >
                Message us
            </button>
            {isClicked && (
                <div className="bg-white p-4 rounded-lg shadow-md mt-2">
                    <div className="flex space-x-4">
                        <div className="text-2xl mb-40 text-blue-500">
                            <FacebookMessage></FacebookMessage>
                        </div>
                        <div className="text-2xl mt-40 text-green-600">
                            <WhatsappAPK></WhatsappAPK>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MessagingButton;