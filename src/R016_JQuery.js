import React,{Component} from "react";
import $ from 'jquery';

class R016_JQuery extends Component{

    input_alert=(e)=>{
        var input_val = $("#inputId").val();
        alert(input_val);
    }

    render() {
        return(
            <div>
                <h2>[THIS IS JQUERY]</h2>
                <input id ="inputId" name ="inputName"/>
                <button id ="buttonId" onClick={e=>this.input_alert(2)}>Jquery Button</button>
            </div>
        )
    }

}

export default R016_JQuery;