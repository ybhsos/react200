import React,{Component} from "react";
import {Route} from 'react-router-dom';

import '../css/new.css'

import HeaderAdmin from './Header/Header admin';
import Footer from './Footter/Footer';
import LoginForm from './LoginForm'
import reactDebounce from './R094_reactDebounce'

class R094_App extends Component{

    render() {
        return (
            <div className="App">
                <HeaderAdmin>
                    <Route exact path="/" component={LoginForm}/>
                    <Route exact path='/Debounce' component={reactDebounce}/>
                </HeaderAdmin>
            </div>
        );
    }

}
export default R094_App