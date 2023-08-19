
import getVolunteersFromDB from "@/data/getVolunteersFromDB";
import One_Volunteer from "./One_Volunteer";


const All_Volunteers = async () => {
    const volunteers = await getVolunteersFromDB();
    return (
        <div className="font-serif my-10">
            <h2 className="text-3xl text-center"> All Volunteers</h2>
            <div className="grid grid-cols-3 gap-5 ">
                {volunteers.map((person) => (
                    <One_Volunteer key={person._id} person={person}></One_Volunteer>
                ))}
            </div>
        </div>
    );
};

export default All_Volunteers;