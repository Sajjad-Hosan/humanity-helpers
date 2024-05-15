import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import MemberCard from "./MemberCard";

const OurTeams = () => {
    const [teams,setTeams] = useState([]);
    useEffect(() => {
        axios.get('/teams.json')
        .then(res => setTeams(res.data))
    },[])
    console.log(teams)
    return (
        <div className="mt-20 w-full px-4 md:px-10">
            <h1 className="text-lg md:text-3xl mb-8 text-center">Our Team</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8">
                {
                    teams.map(item => <MemberCard data={item} />)
                }
            </div>
        </div>
    );
};

export default OurTeams;