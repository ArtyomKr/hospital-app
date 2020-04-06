import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import './index.scss';
import App from './App';
import rootReducer from './redux/RootReducer';
import AppointmentsInitialState from './redux/Appointments/state/AppointmentsInitialState';
import DirectoryInitialState from './redux/Directory/AppointmentsStatuses/state/AppointmentsListStatusesInitialState';
import AuthenticationInitialState from './redux/Authentication/state/AuthenticationInitialState';
import EventsInitialState from './redux/Events/state/EventsInitialState';
import EmployeesInitialState from './redux/Employees/state/EmployeesInitialState';
import * as serviceWorker from './serviceWorker';


function getInitialState () {
    return {
        appointments: AppointmentsInitialState(),
        directory: DirectoryInitialState(),
        authentication: AuthenticationInitialState(),
        events: EventsInitialState(),
        employees: EmployeesInitialState()
    }
}

const store = createStore(rootReducer, getInitialState(), applyMiddleware(thunkMiddleware));

ReactDOM.render((
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
