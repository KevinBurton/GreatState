import React from 'react';
import { Container } from 'reactstrap';
import NavMenu from './NavMenu';
import '../../static/assets/css/layout.css';

export default (props: { children?: React.ReactNode }) => (
    <React.Fragment>
        <NavMenu/>
        <Container>
            {props.children}
        </Container>
    </React.Fragment>
);
