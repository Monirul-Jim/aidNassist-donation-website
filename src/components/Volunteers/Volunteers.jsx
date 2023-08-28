import getVolunteersFromDB from "@/util/getVolunteersFromDB";
import SingleVolunteer from "./SingleVolunteer";

const Volunteers = async () => {
	const volunteers = await getVolunteersFromDB();

	return (
		<div className="max-w-7xl mx-auto mt-1">
			<h1 className="text-center pt-20 pb-6 text-5xl lg:max-w-4xl font-bold mx-auto">
				Our Inspiring <span className="text-blue-800"> Volunteers</span>
			</h1>
			<p className="text-center lg:max-w-4xl mx-auto text-xl mb-8">
				We believe in the power of collective effort and community
				involvement.
			</p>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-5 mx-6">
				{volunteers.map((volunteer) => (
					<SingleVolunteer
						key={volunteer._id}
						volunteer={volunteer}
					></SingleVolunteer>
				))}
			</div>
		</div>
	);
};

export default Volunteers;
