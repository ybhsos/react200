import React,{Component} from "react";
import {Route} from 'react-router-dom'

import '../css/new.css'

import HeaderAdmin from './Header/Header admin';

import Footer from './Footer/Footer';

import LoginForm from './LoginForm';

import reactThrottle from './R095_reactThrottle'
import floatingPopulationList from './components/Floating_population/floatingPopulationList'

class R096_App extends Component{

    render() {
        return (
            <div className ="App">
                <HeaderAdmin></HeaderAdmin>
                <Route exact path='/' component={LoginForm}/>
                <Route exact path='/Throttle' component={reactThrottle}/>
                <Route path='/floatingPopulationList' component={floatingPopulationList}/>
                <Footer></Footer>
            </div>
        );
    }

}

export default R096_App