'use client'

import Star from "@/components/Store/Star/Star";
import useAuth from "@/hooks/useAuth";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaStore } from "react-icons/fa";
import { MagnifyingGlass } from "react-loader-spinner";

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
                <div className="flex items-center justify-center">
                <MagnifyingGlass
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="MagnifyingGlass-loading"
                    wrapperStyle={{}}
                    wrapperClass="MagnifyingGlass-wrapper"
                    glassColor='#c0efff'
                    color='green'
                />
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