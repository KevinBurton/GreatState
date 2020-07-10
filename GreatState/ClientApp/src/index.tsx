import 'bootstrap/dist/css/bootstrap.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import configureStore from './store/configureStore';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Auth0Provider } from "@auth0/auth0-react";

import config from "./auth0_config.json"

// Create browser history to use in the Redux store
const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href') as string;
const history = createBrowserHistory({ basename: baseUrl });

// Get the application-wide store instance, prepopulating with state from the server where available.
const store = configureStore(history);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Auth0Provider
                domain={config.domain}
                clientId={config.client_id}
                redirectUri={window.location.origin}
            >
                <App />
            </Auth0Provider>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
