// 'use client'
// import Image from "next/image";
// import { useEffect, useState } from "react";
// import Star from "./Star/Star";
// import './Store.css'
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import Link from "next/link";
// const ITEMS_PER_PAGE = 6;

// const Store = () => {

//     const [items, setItems] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [selectedCategory, setSelectedCategory] = useState("All Items");
//     const [currentPage, setCurrentPage] = useState(1);

//     useEffect(() => {
//         getallItems()
//     }, []);


//     const getallItems = async () => {
//         let data = await fetch("/api/storeitems");
//         data = await data.json();
//         let result = data.result
//         setItems(result);
//         setLoading(false);
//     };
//     const filterItemsByCategory = (category) => {
//         setSelectedCategory(category);
//         setCurrentPage(1);
//     };

//     const filteredItems = selectedCategory === "All Items" ? items : items.filter(item => item.category === selectedCategory);
//     const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
//     const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
//     const displayedItems = filteredItems.slice(startIndex, startIndex + ITEMS_PER_PAGE);




//     return (
//         <div className="my-10">
//             <div className="flex justify-center space-x-4 mt-4 mb-10">
//                 <button className={`category-button ${selectedCategory === "All Items" && "active"}`} onClick={() => filterItemsByCategory("All Items")}>All Items</button>
//                 <button className={`category-button ${selectedCategory === "Books" && "active"}`} onClick={() => filterItemsByCategory("Books")}>Books</button>
//                 <button className={`category-button ${selectedCategory === "Tshirt" && "active"}`} onClick={() => filterItemsByCategory("Tshirt")}>Tshirt</button>
//                 <button className={`category-button ${selectedCategory === "Hat" && "active"}`} onClick={() => filterItemsByCategory("Hat")}>Hat</button>
//             </div>
//             {loading ? (<div className="text-center">
//                 <div role="status">
//                     <svg aria-hidden="true" className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-green-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
//                         <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
//                     </svg>
//                     <span className="sr-only">Loading...</span>
//                 </div>
//             </div>)
//                 :

//                 (<div >
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">

                    
//                     {displayedItems.map((item) =>
//                         <div key={item._id} className="mx-auto" >
//                             <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//                                 <a href="#">
//                                     <Image width={500} height={500} className="rounded-t-lg w-[500px] h-[400px]" src={item.picture} alt="no image" />
//                                 </a>
//                                 <div className="p-5">
//                                     <h2 className="mb-2 text-3xl font-bold  text-blue-500 dark:text-white">{item.name}</h2>

//                                     <div className="flex items-center justify-between font-semibold">
//                                         <p className="mb-3 text-gray-700 dark:text-gray-400">
//                                             <span className="">Category: </span>
//                                             {item.category}</p>
//                                         <p className="mb-3 text-gray-700 dark:text-gray-400">
//                                             <span className="">Price: $</span>
//                                             {item.price}</p>
//                                     </div>
//                                    <div className="mb-5 text-xl">
//                                    <Star value={item.ratings}></Star>
//                                    </div>

//                                    <Link href={`store-items/${item._id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-300 rounded-lg hover:bg-green-400 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-400 dark:hover:bg-green-500 dark:focus:ring-green-800">
//                                         Details  <FaArrowRight className="ml-2"/>
//                                     </Link>
//                                 </div>
//                             </div>
//                         </div>
//                     )}
//                     </div>
//                      {selectedCategory === "All Items" && (
//                         <div className="flex justify-center mt-4">
//                             <button
//                                 className="pagination-button"
//                                 disabled={currentPage === 1}
//                                 onClick={() => setCurrentPage(currentPage - 1)}
//                             >
//                                 <FaArrowLeft/>
//                             </button>
//                             <span className="mx-2 text-lg text-green-600">
//                                 Page {currentPage} of {totalPages}
//                             </span>
//                             <button
//                                 className="pagination-button"
//                                 disabled={currentPage === totalPages}
//                                 onClick={() => setCurrentPage(currentPage + 1)}
//                             >
//                                 <FaArrowRight/>
//                             </button>
//                         </div>
//                     )}
//                 </div>)
//             }

//         </div>
//     );
// };

// export default Store;










'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
import Star from "./Star/Star";
import './Store.css'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Link from "next/link";
const ITEMS_PER_PAGE = 6;

const Store = () => {

    const [originalItems, setOriginalItems] = useState([]); 
    const [sortedItems, setSortedItems] = useState([]); 
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState("All Items");
    const [currentPage, setCurrentPage] = useState(1);

    const [sortingMethod, setSortingMethod] = useState("Alphabetical");

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




            {loading ? (<div className="text-center">
                <div role="status">
                    <svg aria-hidden="true" className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-green-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg>
                    <span className="sr-only">Loading...</span>
                </div>
            </div>)
                :

                (<div >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">


                        {displayedItems.map((item) =>
                            <div key={item._id} className="mx-auto" >
                                <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                    <a href="#">
                                        <Image width={500} height={500} class="rounded-t-lg w-[500px] h-[400px]" src={item.picture} alt="no image" />
                                    </a>
                                    <div class="p-5">
                                        <h2 class="mb-2 text-3xl font-bold  text-blue-500 dark:text-white">{item.name}</h2>

                                        <div className="flex items-center justify-between font-semibold">
                                            <p class="mb-3 text-gray-700 dark:text-gray-400">
                                                <span className="">Category: </span>
                                                {item.category}</p>
                                            <p class="mb-3 text-gray-700 dark:text-gray-400">
                                                <span className="">Price: $</span>
                                                {item.price}</p>
                                        </div>
                                        <div className="mb-5 text-xl">
                                            <Star value={item.ratings}></Star>
                                        </div>

                                        <Link href={`store-items/${item._id}`} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-300 rounded-lg hover:bg-green-400 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-400 dark:hover:bg-green-500 dark:focus:ring-green-800">
                                            Details  <FaArrowRight className="ml-2" />
                                        </Link>
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