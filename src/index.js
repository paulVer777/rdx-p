import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {createStore} from 'redux';
import {Provider} from 'react-redux';


import reducer from './MessageList/redux'

const Wrapper = ()=>{
    return (
        <Provider store={createStore(reducer)}>
            <App/>
        </Provider>

    )
}

ReactDOM.render(<Wrapper />, document.getElementById('root'));
registerServiceWorker();