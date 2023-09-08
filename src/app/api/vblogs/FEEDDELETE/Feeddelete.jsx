import React from 'react';
import Swal from 'sweetalert2';
import Star from '../Store/Star/Star';

const Feeddelete = ({feed}) => {
    const {name,_id,email,feedback,Rating}=feed;
    console.log("deletefeed",feed)

	const deleteit =async () => {
		console.log("test id",feed._id);
		let response = await fetch(`/api/feedbacks/${feed._id}`, {
			method: "DELETE",
		});
		response = await response.json();
        console.log("res",response)
		if (response.success) {
			Swal.fire({
				position: "top",
				icon: "success",
				title: "Deleted Successfully",
				showConfirmButton: false,
				timer: 1500,
			});
		}
        
	};
    
   
    return (
        <div>
            <div key={_id} className="lg:w-[550px] w-96 p-6 bg-white  border-green-400 rounded-lg shadow dark:bg-gray-800  border-4 gap-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Name: {name}</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Email: {email}</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">FeedBack: {feedback}</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 flex items-center"><span className='me-3'>Rating: {Rating}</span><Star value={Rating}></Star></p>
           <button className="bg-green-400 p-3 rounded-xl text-white" onClick={deleteit}>Delete FeedBack</button>
        </div>
        </div>
    );
};

export default Feeddelete;