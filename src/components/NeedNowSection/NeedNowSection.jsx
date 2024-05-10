import VolunteerCard from "../VolunteerCard/VolunteerCard";

const NeedNowSection = () => {
    return (
        <div className="flex flex-col gap-4 mt-28 text-center pb-4">
            <h1 className="text-4xl">Volunteer Need Now</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-10 mb-3">
                <VolunteerCard/>
                <VolunteerCard/>
                <VolunteerCard/>
                <VolunteerCard/>
                <VolunteerCard/>
                <VolunteerCard/>
            </div>
            <button className="btn btn-neutral px-10 w-1/2 mx-auto">See All</button>
        </div>
    );
};

export default NeedNowSection;