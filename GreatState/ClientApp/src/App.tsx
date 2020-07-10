import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Login from './components/Login';
import Contact from './components/Contact';
import WOD from './components/WOD';
import Dropin from './components/Dropin';
import GettingStarted from './components/GettingStarted';
import Facility from './components/Facility';
import Story from './components/Story';
import Pricing from './components/Pricing';
import Resources from './components/Resources';
import Programs from './components/Programs';
import Schedule from './components/Schedule';
import NotFoundPage from './components/NotFoundPage';
import UnderConstruction from './components/UnderConstruction';

import Counter from './components/Counter';
import FetchData from './components/FetchData';

import './custom.css'
const handleUnderConstructionNotification = (event: React.FormEvent<EventTarget>) => {
    event.preventDefault();
    console.log(event);
}

export default () => {
    if (process.env.REACT_APP_CONSTRUCTION === 'true') {
        return (<UnderConstruction onSubmit={handleUnderConstructionNotification}/>);
    } else {
        return (
            <Layout>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/login' component={Login} />
                    <Route path='/resources' component={Resources} />
                    <Route path='/gettingstarted' component={GettingStarted} />
                    <Route path='/dropin' component={Dropin} />
                    <Route path='/wod' component={WOD} />
                    <Route path='/pricing' component={Pricing} />
                    <Route path='/facility' component={Facility} />
                    <Route path='/programs' component={Programs} />
                    <Route path='/schedule' component={Schedule} />
                    <Route path='/story' component={Story} />
                    <Route path='/contact' component={Contact} />
                    <Route path='/counter' component={Counter} />
                    <Route path='/fetch-data/:startDateIndex?' component={FetchData} />
                    <Route component={NotFoundPage} />
                </Switch>
            </Layout>
        );
    }
}
