/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import useAuth from '@/hooks/useAuth'
import { useEffect, useState } from 'react'
import { RiDeleteBin6Line } from 'react-icons/ri'
import Swal from 'sweetalert2'

const AllRolesPage = () => {
  const { user } = useAuth()
  const [datas, setDatas] = useState([])

  const getallusers = async () => {
    try {
      let data = await fetch('/api/users')
      if (!data.ok) {
        throw new Error('Failed to fetch data')
      }
      data = await data.json()
      let result = data.result
      setDatas(result)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  useEffect(() => {
    getallusers()
  }, [])

  const handleDeleteUser = async (_id) => {
    let response = await fetch(`/api/users/specUser/${_id}`, {
      method: 'DELETE'
    })
    response = await response.json()
    if (response.success) {
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Deleted Successfully',
        showConfirmButton: false,
        timer: 1500
      })
      const remaining = datas.filter(data => data._id !== _id)
      setDatas(remaining)
    }
  }

  return (
    <section>
      <h2 className='text-3xl font-bold text-center mt-0 md:mt-10 pt-10 pb-5'>
        Manage Users
      </h2>
      <div>
        <div className='overflow-x-auto mt-8 mx-auto mb-52 md:mb-28 rounded-md'>
          <table className='mx-auto shadow-xl border w-[65%] table-auto bg-white overflow-hidden mb-10 rounded-lg'>
            {/* Head */}
            <thead>
              <tr className='bg-blue-900 text-white'>
                <th className='px-6 py-3 text-left'>ID</th>
                <th className='px-6 py-3 text-left'>Name</th>
                <th className='px-6 py-3 text-left'>Email</th>
                <th className='px-6 py-3 text-left'>Current Role</th>
                <th className='px-6 py-3 text-left'>Action</th>
              </tr>
            </thead>
            <tbody>
              {datas.map((item, index) => (
                <tr
                  key={item._id}
                  className='dark:bg-black'
                >
                  <td className='px-6 py-4'>{index + 1}</td>
                  <td className='px-6 py-4'>{item.name}</td>
                  <td className='px-6 py-4'>{item.email}</td>
                  <td className='px-6 py-4 text-emerald-600 font-semibold'>
                    {item.role}
                  </td>

                  <button
                    className='rounded bg-red-400 mt-3 px-4 py-2 text-white font-semibold'
                    onClick={() => handleDeleteUser(item._id)}
                  >
                    <RiDeleteBin6Line className='text-xl' />
                  </button>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default AllRolesPage