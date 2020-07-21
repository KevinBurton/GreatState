import React from 'react';

import MemberList from '../pages/MemberList';

export default ({ pageContext: { member } }) => (
    <MemberList member={member}/>
);