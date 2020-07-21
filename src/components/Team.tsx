import React, { FunctionComponent } from 'react';

type TeamInfo = {
      team: {
        id: number
        teamName: string
    }
}

const Team: FunctionComponent<TeamInfo> = ({team}) => {

    return (
        <>
            <div>{team.teamName}</div>
        </>
    );
};

export default Team;