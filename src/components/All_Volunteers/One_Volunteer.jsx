'use client'
import Image from "next/image";
import Link from "next/link";
import Swal from "sweetalert2";
// import { useState } from "react";


const One_Volunteer = ({ person }) => {
    // const [showModal, setShowModal] = useState(false)

    const { _id, name, email, designation, bloodGroup, phoneNumber, workPlace } = person;


const handleDelete = async () => {
    console.log(_id);
    let response = await fetch(`/api/volunteerses/${_id}`, {
        method: 'DELETE'
    });
    response = await response.json();
    if (response.success) {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Deleted Successfully',
            showConfirmButton: false,
            timer: 1500
          })
    }
}





    return (
        <div className="mx-auto">

            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <Image src="" alt="No Image" />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Name:{name}</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Mail @ {email}</p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Designation:{designation}</p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Blood Group:{bloodGroup}</p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Contact no:{phoneNumber}</p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Place: {workPlace}</p>
                    {/* <button onClick={() => setShowModal(true)} type="button" className="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">✍🏻</button> */}
                    {/* >----------------------------------------------------< */}
                    <div>

                        {/* <OpeningModal isvisible={showModal} onClose={() => setShowModal(false)}>

                            <EditModal></EditModal>
                        </OpeningModal> */}

                        <Link href={`volunteers/${_id}`}>Edit</Link>
                        <button onClick={handleDelete} className="rounded-xl bg-fuchsia-400 px-7 py-3">Delete</button>

                    </div>
                    {/* >----------------------------------------------------< */}
                </div>
            </div>

        </div>
    );
};

export default One_Volunteer;