import React from "react";
import ReactDom from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import './index.css';
import App from './components/App';
import * as serviceWorker form './serviceWorker';

ReactDom.render((
    <BrowserRouter>
        <App></App>
    </BrowserRouter>
    )
),document.getElementById('root');

serviceWorker.unregister();