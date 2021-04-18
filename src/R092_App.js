import React,{Component} from "react";
import {Route} from 'react-router-dom';

import '../css/new.css';

import HeaderAdmin from './Header/Header admin';
import Footer from './Footer/Footer';

import LoginForm from './LoginForm';

class R092_App extends Component{


    render() {
        return (
            <div className="App">
                <HeaderAdmin></HeaderAdmin>
                    <Route exact path ='/' component={LoginForm} />

                <Footer></Footer>

            </div>
        );
    }


}

export default R092_App