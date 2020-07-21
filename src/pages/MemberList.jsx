import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Member from '../components/Member';

const MemberList = () => {
    const [members, setMembers] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3001/api/members')
             .then((response) => {
                 setMembers(response.data);
             });
    }, [])
    return (
        <>
            <div>Members</div>
            {members.map((member) => {
                return (
                    <Member key= {member.id} member={member}/>
                );
            })}
        </>
    );
};

export default MemberList;