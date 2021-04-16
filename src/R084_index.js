import React from "react";
import ReactDom from 'react-dom';
import './index.css';
import App from './App';
import {createStore,applyMiddleware} from "redux";
import {Provider} from 'react-redux';
import reducers from './reducers';

const CllMiddleware = store => nextMiddle => action =>{

    console.log('1');
    console.log('2.'+action.type+':'+store.getState().data.str);
    let result = nextMiddle(action);
    console.log('3');
    console.log('4'+action.type+":"+store.getState().data.str);
    return result;
}

const store = createStore(reducers, applyMiddleware(CallMiddleware));

const listener =() =>{
    ReactDOM.render(
        <Provider store={store}>
            <App indexProp="react"></App>
        </Provider>
        document.getElementById("root");

    )
}

store.subscribe(listener);
listener();
