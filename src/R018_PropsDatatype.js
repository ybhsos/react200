import React,{Component} from "react";
import datatype from "prop-types";

class R018_PropsDatatype extends Component{


    render() {
        let {
            String, Number, Boolean, Array, ObjectJSON, Function
        }= this.props;

        return (
           <div style = {{padding:"0px"}}>
               <p>{String}</p>
               <p>{Number}</p>
               <p>{Boolean.toString()}</p>
               <p>{Array.toString()}</p>
               <p>{JSON.stringify(ObjectJSON)}</p>
               <p>{Function}</p>
           </div>
            )
    }
}

R018_PropsDatatype.prototypes={
    String:datatype.string,
    Number:datatype.number,
    Boolen:datatype.bool,
    Array:datatype.array,
    ObjectJSON:datatype.object,
    Function:datatype.func,
}

export default R018_PropsDatatype;