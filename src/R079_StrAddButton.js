import React,{Component} from "react";
import {add} from './actions';

class R079_StrAddButton extends Component{


    render() {
        return (

            <input value="Add200" type="button" onClick={this.addString}/>
        );
    }

    addString = () =>{
        this.props.store.dispatch(add());
    }



}

export default R079_StrAddButton