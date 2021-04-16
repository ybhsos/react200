import React,{Component} from "react";
import {connect} from "react-redux";
import {add} from './actions';
import StrAddButton from "./StrAddButton";

class R083_StrAddButton extends Component{

    render() {
        return (
            //<input value="Add200" type="button" onClick={this.addString}/>
            <input value="Add200" tyoe="button" onClick={this.props.addString}/>
        );
    }

    /*
    addString = () =>{
        this.props.store.dispatch(add());
    }
    */
}

let mapDispatchToProps = (dispatch,props)=>{
    console.log('props from app.js :'+ props.AppProp)
    return{
        addString :() => dispatch(add())
    }
}

StrAddButton = connect(null,mapDispatchToProps)(StrAddButton);

export default R083_StrAddButton;