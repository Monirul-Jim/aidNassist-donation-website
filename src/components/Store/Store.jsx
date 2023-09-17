'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
import Star from "./Star/Star";
import './Store.css'
import { FaArrowLeft, FaArrowRight, FaLock } from "react-icons/fa";
import Link from "next/link";
import useAuth from "@/hooks/useAuth";
import { MagnifyingGlass } from "react-loader-spinner";
const ITEMS_PER_PAGE = 6;

const Store = () => {

    const [originalItems, setOriginalItems] = useState([]);
    const [sortedItems, setSortedItems] = useState([]);
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState("All Items");
    const [currentPage, setCurrentPage] = useState(1);

    const [sortingMethod, setSortingMethod] = useState("Alphabetical");
    const { user } = useAuth();


    useEffect(() => {
        getallItems()
    }, []);


    const getallItems = async () => {
        let data = await fetch("/api/storeitems");
        data = await data.json();
        let result = data.result;
        setOriginalItems(result);
        setLoading(false);
    };

    const sortItems = (method) => {
        let sortedItems = [...originalItems];

        if (method === "Alphabetical") {
            sortedItems.sort((a, b) => a.name.localeCompare(b.name));
        } else if (method === "LowToHigh") {
            sortedItems.sort((a, b) => a.price - b.price);
        } else if (method === "HighToLow") {
            sortedItems.sort((a, b) => b.price - a.price);
        } else if (method === "Ratings") {
            sortedItems.sort((a, b) => b.ratings - a.ratings);
        }

        return sortedItems;
    };

    useEffect(() => {
        setSortedItems(sortItems(sortingMethod));
    }, [sortingMethod, originalItems]);

    const filterItemsByCategory = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1);
    };

    const filteredAndSortedItems = selectedCategory === "All Items" ? sortedItems : sortedItems.filter(item => item.category === selectedCategory);
    const totalPages = Math.ceil(filteredAndSortedItems.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const displayedItems = filteredAndSortedItems.slice(startIndex, startIndex + ITEMS_PER_PAGE);









    return (
        <div className="my-10">
            <div className="flex justify-center space-x-4 mt-4 mb-10">
                <button className={`category-button ${selectedCategory === "All Items" && "active"}`} onClick={() => filterItemsByCategory("All Items")}>All Items</button>
                <button className={`category-button ${selectedCategory === "Books" && "active"}`} onClick={() => filterItemsByCategory("Books")}>Books</button>
                <button className={`category-button ${selectedCategory === "Tshirt" && "active"}`} onClick={() => filterItemsByCategory("Tshirt")}>Tshirt</button>
                <button className={`category-button ${selectedCategory === "Hat" && "active"}`} onClick={() => filterItemsByCategory("Hat")}>Hat</button>
            </div>



            <div className="flex justify-center md:justify-end md:mr-10 space-x-4 mt-4 mb-10">
                <label htmlFor="sortingMethod" className="sr-only">
                    Sorting Method
                </label>
                <select
                    id="sortingMethod"
                    className="p-2 text-white bg-green-300 dark:bg-green-400 border border-gray-300 rounded-lg shadow-md focus:ring focus:ring-green-300"
                    value={sortingMethod}
                    onChange={(e) => setSortingMethod(e.target.value)}
                >
                    <option value="Alphabetical">A to Z</option>
                    <option value="LowToHigh">Low to High Price</option>
                    <option value="HighToLow">High to Low Price</option>
                    <option value="Ratings">Ratings</option>
                </select>
            </div>




            {loading ? (
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
            )
                :

                (<div >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">


                        {displayedItems.map((item) =>
                            <div key={item._id} className="mx-auto" >
                                <div className="max-w-sm h-[642px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                    <a href="#">
                                        <Image width={500} height={500} className="rounded-t-lg w-[500px] h-[400px]" src={item.picture} alt="no image" />
                                    </a>
                                    <div className="p-5">
                                        <h2 className="mb-2 text-3xl font-bold  text-blue-500 dark:text-white">{item.name}</h2>

                                        <div className="flex items-center justify-between font-semibold">
                                            <p className="mb-3 text-gray-700 dark:text-gray-400">
                                                <span className="">Category: </span>
                                                {item.category}</p>
                                            <p className="mb-3 text-gray-700 dark:text-gray-400">
                                                <span className="">Price: $</span>
                                                {item.price}</p>
                                        </div>
                                        <div className="mb-5 text-xl">
                                            <Star value={item.ratings}></Star>
                                        </div>
                                        {user ?

                                            <Link href={`store-items/${item._id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-300 rounded-lg hover:bg-green-400 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-400 dark:hover:bg-green-500 dark:focus:ring-green-800">
                                                Details  <FaArrowRight className="ml-2" />
                                            </Link>
                                            :
                                            <Link href="/login" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-300 rounded-lg hover:bg-green-400 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-400 dark:hover:bg-green-500 dark:focus:ring-green-800">
                                                Log in  <FaLock className="ml-2" />
                                            </Link>
                                        }
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    {selectedCategory === "All Items" && (
                        <div className="flex justify-center mt-4">
                            <button
                                className="pagination-button"
                                disabled={currentPage === 1}
                                onClick={() => setCurrentPage(currentPage - 1)}
                            >
                                <FaArrowLeft />
                            </button>
                            <span className="mx-2 text-lg text-green-600">
                                Page {currentPage} of {totalPages}
                            </span>
                            <button
                                className="pagination-button"
                                disabled={currentPage === totalPages}
                                onClick={() => setCurrentPage(currentPage + 1)}
                            >
                                <FaArrowRight />
                            </button>
                        </div>
                    )}
                </div>)
            }

        </div>
    );
};

export default Store;