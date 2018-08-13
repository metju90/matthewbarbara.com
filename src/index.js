import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {BrowserRouter} from 'react-router-dom';
import { getStore, init as storeInit, registerReducer } from './redux/store';
import registerServiceWorker from './registerServiceWorker';


const getInitiatedStore = () => {
    storeInit();
    registerReducer();
    return getStore();
  };

const store = getInitiatedStore();
  
const WrappedApp = () =>
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
;

ReactDOM.render(<WrappedApp />, document.getElementById('root'));
registerServiceWorker();