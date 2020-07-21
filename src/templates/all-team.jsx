import React from 'react';

import TeamList from '../pages/TeamList';

export default ({ pageContext: { team } }) => (
    <TeamList team={team}/>
);