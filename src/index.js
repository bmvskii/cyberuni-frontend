import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/App';
import ErrorBoundry from './components/ErrorBoundry';
import { ApiServiceProvider } from './components/Context';

import { api } from './services';
import store from './redux/store';

import './styles/index.sass'

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <ApiServiceProvider value={api}>
                <Router>
                    <App />
                </Router>
            </ApiServiceProvider>
        </ErrorBoundry>
    </Provider>,
    document.getElementById('root')
);