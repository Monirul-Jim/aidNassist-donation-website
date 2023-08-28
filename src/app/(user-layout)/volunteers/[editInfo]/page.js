'use client'

import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const UpdateVolunteerData = (props) => {

    const [volunteerData, setVolunteerData] = useState(null);

    useEffect(() => {
        getSpecificData()
    }, []);

    const getSpecificData = async () => {
        let vol_Id = props.params.editInfo
        let volData = await fetch(`/api/volunteers/${vol_Id}`);
        volData = await volData.json();
        let result = volData.result
        setVolunteerData(result);
    }



    const handleUpdateInfo = async event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const phoneNumber = form.phoneNumber.value;
        const workPlace = form.workPlace.value;
        const total = { name, phoneNumber: parseInt(phoneNumber), workPlace }
        console.log({ total });
        let vol_Id = props.params.editInfo
        let result = await fetch(`/api/volunteers/${vol_Id}`, {
            method: "PUT",
            body: JSON.stringify(total)
        });
        result = await result.json();
        if (result.success) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Updated Data',
                showConfirmButton: false,
                timer: 1500
              })
          
        }
    }







    return (
        <div className="p-10">



            {volunteerData && (
               
            


            <form onSubmit={handleUpdateInfo}>
                <div className="relative z-0 w-full mb-6 group">
                    <input defaultValue={volunteerData.name} type="text" name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-400 focus:outline-none focus:ring-0 focus:border-green-400 peer" placeholder=" " />
                    <label for="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300  -translate-y-6  top-2 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-400 peer-focus:dark:text-green-400  peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6">Name</label>
                </div>

                <div className="grid md:grid-cols-2 md:gap-6">

                    <div className="relative z-0 w-full mb-6 group">
                        <input defaultValue={volunteerData.email} type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-400 peer" placeholder=" " required readOnly />
                        <label for="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300  -translate-y-6 top-2 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-400 peer-focus:dark:text-green-400  peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6">Email</label>
                    </div>

                    <div className="relative z-0 w-full mb-6 group">
                        <input defaultValue={volunteerData.phoneNumber} type="number" name="phoneNumber" id="phoneNumber" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-400 focus:outline-none focus:ring-0 focus:border-green-400 peer" placeholder=" " required />
                        <label for="phoneNumber" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300  -translate-y-6 top-2 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-400 peer-focus:dark:text-green-400  peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6">Phone number (+8801xxxxxxxxx)</label>
                    </div>

                </div>


                <div className="relative z-0 w-full mb-6 group">
                    <input defaultValue={volunteerData.workPlace} type="text" name="workPlace" id="workPlace" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-400 focus:outline-none focus:ring-0 focus:border-green-400 peer" placeholder=" " required />
                    <label for="workPlace" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300  -translate-y-6 top-2 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-400 peer-focus:dark:text-green-400  peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6">Work Place</label>
                </div>

                <div className="flex justify-center items-center">
                    <button type="submit" className="text-white bg-green-500 hover:bg-green-400 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-400 dark:hover:bg-green-500 dark:focus:ring-green-500">Update</button>
                </div>
            </form>
            )}
        </div>
    );
};

export default UpdateVolunteerData;