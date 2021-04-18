import React,{Component} from "react";
import {Route} from 'react-router-dom';
import reactRouter from './R089_reactRouter'
import reactRouter2 from './R089_reactRouter2'

import '../css/new.css'

import HeaderAdmin from './Header/Header admin';
import Footer from './Footer/Footer';

class R091_App extends Component{
    

    render() {
        return (
            <div className="App">
                <HeaderAdmin></HeaderAdmin>
                 <Route exact path='/' component={reactRouter}/>
                 <Route exact path='/reactRouter2' component={reactRouter2}/>
                 <Footer></Footer>
            </div>
        );
    }


}

export default R091_App