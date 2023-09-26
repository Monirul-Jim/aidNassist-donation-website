'use client'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const AdminSslMoney = () => {
    const [paymentHistory, setPaymentHistory] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage] = useState(10)
    const [serialNumber, setSerialNumber] = useState(1)
  useEffect(() => {
    getPaymentHistory()
  }, [])

  const getPaymentHistory = async () => {
    let response = await fetch('/api/sslmoneyfromdb')
    let data = await response.json()
    let result = data.result
    setPaymentHistory(result)
    setIsLoading(false)
  }
  const total = paymentHistory.reduce((sum, item) => sum + item?.price, 0)
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = paymentHistory.slice(indexOfFirstItem, indexOfLastItem)
  // Change page
  const paginate = pageNumber => {
    setCurrentPage(pageNumber)
  }

  useEffect(() => {
    setSerialNumber((currentPage - 1) * itemsPerPage + 1)
  }, [currentPage])

  return (
    <div>
        <div>
            <h2 className='text-4xl font-extrabold text-center mt-0 pt-4 pb-12'>
            SSLCOMMERZ Donation History
            </h2>
            {/* <h2 className='mt-5 md:mt-6 mb-10 font-bold md:text-3xl '>
            Total Donation Amount: ${total}
            </h2> */}
            {isLoading ? (
            <div className='text-center'>
                <div role='status'>
                <svg
                    aria-hidden='true'
                    className='inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-green-500'
                    viewBox='0 0 100 101'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                    d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                    fill='currentColor'
                    />
                    <path
                    d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                    fill='currentFill'
                    />
                </svg>
                <span className='sr-only'>Loading...</span>
                </div>
            </div>
            ) : (
            <div className='w-3/4 mx-auto md:ml-72'>
                <table className='min-w-full bg-white border-collapse overflow-hidden sm:rounded-lg'>
                <thead className='bg-gray-100'>
                    <tr className='bg-green-300'>
                    <th className='px-6 py-3 text-xs md:text-base text-gray-600'>
                        SI No
                    </th>
                    <th className='px-6 py-3 text-xs md:text-base text-left text-gray-600'>
                        Mail
                    </th>
                    <th className='px-6 py-3 text-xs md:text-base text-left text-gray-600'>
                        Amounts
                    </th>
                    <th className='px-6 py-3 text-xs md:text-base hidden md:block text-left text-gray-600'>
                        Transaction ID
                    </th>
                    <th className='px-6 py-3 text-xs md:text-base text-right md:text-center text-green-600'>
                        Status
                    </th>
                    </tr>
                </thead>
                <tbody className='divide-y divide-gray-200'>
                    {currentItems.map((item, index) => (
                    <tr key={item._id}>
                        <td className='px-6 py-4 text-center text-xs md:text-base'>
                        {serialNumber + index}
                        </td>
                        <td className='px-6 py-4 text-xs md:text-base'>
                        {item?.email}
                        </td>
                        <td className='px-6 py-4 text-xs md:text-base'>
                        ${item?.price}
                        </td>
                        <td className='px-6 py-4 text-xs md:text-base hidden md:block'>
                        {item?.tran_id}
                        </td>
                        <td className='px-6 py-4 text-xs text-right md:text-center text-green-600 font-bold'>
                        {item?.status}
                        </td>
                    </tr>
                    ))}
                </tbody>
                </table>
                {/* Pagination */}
                <div className='flex justify-center my-4'>
                <ul className='pagination flex space-x-2'>
                    {Array.from({
                    length: Math.ceil(paymentHistory.length / itemsPerPage)
                    }).map((_, index) => (
                    <li key={index} className='page-item'>
                        <button
                        onClick={() => paginate(index + 1)}
                        className={`${
                            currentPage === index + 1
                            ? 'bg-green-500 text-white'
                            : ''
                        } px-4 py-2 border border-gray-300 rounded hover:bg-green-500 hover:text-white`}
                        >
                        {index + 1}
                        </button>
                    </li>
                    ))}
                </ul>
                </div>
            </div>
            )}
        </div>
    </div>
  )
}

export default AdminSslMoney
