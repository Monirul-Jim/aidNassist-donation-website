"use client"
import { useForm } from "react-hook-form";
import { Toaster, toast } from "react-hot-toast";

// const event_img_token = process.env.VITE_EVENT_IMAGE;


const EventForm = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    //   console.log(event_img_token);


    const onSubmit = (data) => {
        console.log({ data })

        fetch('api/events',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            toast('successful event added')
        })
        .catch(error => {
            console.log(error);
        })
    };

    return (
        <>
            <Toaster></Toaster>
            <div className="ml-0 lg:ml-[400px] mt-20 md:mt-32  md:ml-64">
                <form onSubmit={handleSubmit(onSubmit)} className="mx-2 md:mx-10 border border-blue-600 p-10 shadow-md rounded my-10 ">
                    <h2 className="text-3xl text-center font-semibold mb-8">Add a Event</h2>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" {...register("title", { required: true })} name="title" id="title" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label htmlFor="title" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Event Title <span className="text-red-500"><sup> *</sup></span></label>
                        {errors.title && <span className="text-red-500 text-xs">Name field is required</span>}
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" {...register("location", { required: true })} name="location" id="location" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label htmlFor="location" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Location <span className="text-red-500"><sup> *</sup></span></label>
                        {errors.location && <span className="text-red-500 text-xs">Location field is required</span>}
                    </div>
                    {/* todo : image selected */}
                    <div className="relative z-0 w-full mb-6 group mt-10">
                        <input type="text" {...register("image", { required: true })} name="image" id="image" className="block py-2.5 px-0 w-full text-xs text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label htmlFor="image" className="peer-focus:font-medium pb-2 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Image url<span className="text-red-500"><sup>*</sup></span></label>
                        {errors.image && <span className="text-red-500 text-xs">Image is required</span>}
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6 mt-10">
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="time" {...register("time", { required: true })} name="time" id="time" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label htmlFor="time" className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Time <span className="text-red-500"><sup>*</sup></span></label>
                            {errors.time && <span className="text-red-500 text-xs">Time field is required</span>}
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="date" {...register("date", { required: true })} name="date" id="date" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label htmlFor="date" className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Date <span className="text-red-500"><sup>*</sup></span></label>
                            {errors.date && <span className="text-red-500 text-xs">Date field is required</span>}
                        </div>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" {...register("details", { required: true })} name="details" id="details" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label htmlFor="details" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description<span className="text-red-500"> <sup>*</sup></span></label>
                        {errors.details && <span className="text-red-500 text-xs">Description field is required</span>}
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-green-500 dark:focus:ring-blue-800">Add Event</button>
                </form>

            </div>
        </>
    );
};

export default EventForm;