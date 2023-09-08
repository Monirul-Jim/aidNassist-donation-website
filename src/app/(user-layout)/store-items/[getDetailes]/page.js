'use client'

import Star from "@/components/Store/Star/Star";
import useAuth from "@/hooks/useAuth";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaStore } from "react-icons/fa";

const GetDetailItems = (props) => {

    const [itemDetails, setItemDetails] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isDescriptionOpen, setIsDescriptionOpen] = useState(true);
    const [isReviewsOpen, setIsReviewsOpen] = useState(false);
    const { user } = useAuth();


    useEffect(() => {
        const savedDescriptionState = localStorage.getItem('isDescriptionOpen');
        const savedReviewsState = localStorage.getItem('isReviewsOpen');

        setIsDescriptionOpen(savedDescriptionState === 'true');
        setIsReviewsOpen(savedReviewsState === 'true');
    }, []);

    useEffect(() => {
        localStorage.setItem('isDescriptionOpen', isDescriptionOpen);
        localStorage.setItem('isReviewsOpen', isReviewsOpen);
    }, [isDescriptionOpen, isReviewsOpen]);







    useEffect(() => {
        getItemData()
    }, [])


    const getItemData = async () => {
        let item_Id = props.params.getDetailes
        let itemData = await fetch(`/api/storeitems/${item_Id}`);
        itemData = await itemData.json();
        let result = itemData.result
        setItemDetails(result);
        setIsLoading(false);
    }



    // const handleCart = async itemDetails => {
    //     const cartItems = { itemId: itemDetails._id, name: itemDetails.name, itemImg: itemDetails.picture, category: itemDetails.category, price: itemDetails.price, ratings: itemDetails.ratings, description: itemDetails.description }
    //     console.log({ cartItems });
    //     let result = await fetch("/api/cartforusers", {
    //         method: "POST",
    //         body: JSON.stringify(cartItems)
    //     });
    //     result = await result.json();
    //     if (result.success) {
    //         toast.success('Added to Cart!')
    //     }

    // }


    const handleCart = async itemDetails => {
        const cartItems = { itemId: itemDetails._id, name: itemDetails.name, itemImg: itemDetails.picture, category: itemDetails.category, price: itemDetails.price, ratings: itemDetails.ratings, description: itemDetails.description, email: user.email }
        console.log({ cartItems });
        let result = await fetch("/api/onlyuserscart", {
            method: "POST",
            body: JSON.stringify(cartItems)
        });
        result = await result.json();
        if (result.success) {
            toast.success('Added to Cart!')
        }

    }







    return (
        <div className="my-32">
            {isLoading ? (
                <div className="text-center">
                    <div role="status">
                        <svg aria-hidden="true" className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-green-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                        </svg>
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            ) : (



                <div>
                    <h2 className="mt-32 mb-10 font-semibold text-center md:text-start md:ml-[420px] text-2xl md:text-5xl">{itemDetails.name}</h2>
                    <div className="flex flex-col md:flex-row justify-evenly  mx-20">
                        <div>
                            <Image src={itemDetails.picture} width={420} height={655} alt="no image"></Image>
                            <Link href={'/store-items'}><button className="mt-5 text-xl text-blue-400 bg-green-200 px-4 py-2 rounded-xl"><FaStore></FaStore></button></Link>
                        </div>
                        <div>
                            <h2 className="text-2xl mb-10">${itemDetails.price}</h2>
                            <p className="text-3xl max-w-sm md:mb-20 md:h-16">{itemDetails.description}</p>
                            <div className="text-3xl my-5">
                                <Star value={itemDetails.ratings}></Star>
                            </div>

                            <div>
                                <button onClick={() => handleCart(itemDetails)} className="rounded-xl bg-green-400  px-5 py-3 text-white my-5">Add to Cart</button>
                            </div>


                            <div className="max-w-md  mb-10">
                                <h2 className="underline text-2xl mb-5"> From Author:</h2>
                                <p className="text-base">Your purchase not only benefits you 😊, but also makes a positive impact on a meaningful cause 🌍. Your money 💰 is well-spent by adding a donation 🙌 to your payment 💳.</p>
                            </div>

                            <hr />
                            <p className="text-sm">Category: {itemDetails.category}</p>
                            <p>{itemDetails.quantity} <span className="text-sm">Available Now</span></p>
                        </div>
                    </div>
                    <div>










                        <div className="flex justify-start items-center gap-3 mx-20 md:ml-[370px] mt-10">
                            <button
                                className={`descriptionReview-button ${isDescriptionOpen ? 'active' : ''}`}
                                onClick={() => {
                                    setIsDescriptionOpen(true);
                                    setIsReviewsOpen(false);
                                }}
                            >
                                Description
                            </button>
                            <button
                                className={`descriptionReview-button ${isReviewsOpen ? 'active' : ''}`}
                                onClick={() => {
                                    setIsDescriptionOpen(false);
                                    setIsReviewsOpen(true);
                                }}
                            >
                                Reviews ({itemDetails.reviews.length})
                            </button>
                        </div>


                        <div className="mx-20 md:ml-[370px] mt-5">
                            {isDescriptionOpen && (
                                <p>{itemDetails.description}</p>
                            )}

                            {isReviewsOpen && (

                                <ul>
                                    <li className="mb-2">1. {itemDetails.reviews[0]}</li>
                                    <li className="mb-2">2. {itemDetails.reviews[1]}</li>
                                    <li>3. {itemDetails.reviews[2]}</li>
                                </ul>


                            )}
                        </div>





                    </div>
                </div>

            )}




        </div>
    );
};

export default GetDetailItems;