import React,{Component} from "react";
import {Route} from 'react-router-dom';

import '../css/new.css';

import HeaderAdmin from './Header/Header admin';
import Footer from './Footter/Footer';
import LoginForm from './LoginForm'

import reactThrottle from './R095_reactThrottle'



class R095_App extends Component{


    render() {
        return (
            <div className="App">
                <HeaderAdmin></HeaderAdmin>
                <Route exact path='/' component={LoginForm}></Route>
                <Route exact path='/Throttle' component={reactThrottle}></Route>
                <Footer></Footer>
            </div>
        );
    }


}

export default R095_App