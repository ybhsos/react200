import React,{Component} from "react";
import {Route} from 'react-router-dom';
import reactRouter from './R089_reactRouter'
import reactRouter2 from './R089_reactRouter2'

class R089_App extends Component{


    render() {
        return (
            <div className="App">
                <Route exact path="/" componet={reactRouter}></Route>
                <Route exact path="/reactRouter2" component={reactRouter2}></Route>
            </div>
        );
    }


}

export default R089_App