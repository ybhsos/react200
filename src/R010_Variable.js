import React,{Component} from "react";

class R010_Variable extends Component{

    constructor(props) {
        super(props);
        this.state={};
    }

   componentDidMount() {
        var varName = 'react';
        console.log(varName);
        var varNmae = '200';
        console.log(varName);

        let letName = 'react';
        console.log(letName);
        letName = 'react200';
        console.log(letName);

        const constName ='react';
        console.log(constName);

   }


    render() {
        return (
            <h2>[THIS IS Variable ]</h2>
        );
    }

}

export default R010_Variable;