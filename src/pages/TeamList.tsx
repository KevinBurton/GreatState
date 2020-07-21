import React, { useState, useEffect } from 'react';
import axios from 'axios';


import Team from '../components/Team';

const TeamList = () => {
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3001/api/teams')
             .then((response) => {
                setTeams(response.data);
             });
    }, []);
    return (
        <>
            <div>Teams</div>
            {teams.map((team) => {
                return (
                    <Team key= {team.id} team={team}/>
                );
            })}
        </>
    );
};

export default TeamList;