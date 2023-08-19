import Image from "next/image";


const One_Volunteer = ({person}) => {

    const {name, email, designation, bloodGroup, phoneNumber, workPlace} = person;

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
                </div>
            </div>

        </div>
    );
};

export default One_Volunteer;