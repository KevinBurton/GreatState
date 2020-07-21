import React, { FunctionComponent } from 'react';

type MemberInfo = {
      member: {
        id: number;
        firstName: string;
        lastName: string;
        team: string;
        status: string;
    }
}

const Member: FunctionComponent<MemberInfo> = ({member}) => {

    return (
        <>
            <div>{member.firstName}</div>
            <div>{member.lastName}</div>
            <div>{member.team}</div>
            <div>{member.status}</div>
        </>
    );
};

export default Member;