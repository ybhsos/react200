import React, {Component} from "react";
import datatype from 'prop-types';

class R020_PropsObjVal extends Component{


    render() {
        let{
            OjectJSON
        } = this.props
        return (
            <div style={{padding:"0px"}}>
                {JSON.stringify(OjectJSON)}
            </div>
        );
    }


}

R020_PropsObjVal.prototypes={
    OjectJSON: datatype.shape({
       react:datatype.string,
       twohundred:datatype.number
   })
}

export default R020_PropsObjVal;