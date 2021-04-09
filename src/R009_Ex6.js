import React, {Component} from "react";

class R009_Ex6 extends Component{

    constructor(props) {
        super(props);
        this.state={};
    }

    componentDidMount() {
        let jsString1 = '스크립트';
        let jsString2 = '입니다.';
        console.log(jsString1 + ' 문자열 : ' + jsString2);

        let Es6String1 = 'ES6';
        let Es6String2 = '입니다';
        console.log(`${Es6String1} 문자열 ${Es6String2}`);

        let LongString = "ES6에 추가된 String 함수들입니다.";
        console.log('startsWith : ' + LongString.startsWith("ES6에 추가"));
        console.log('endswith : ' + LongString.endsWith("함수들입니다."));
        console.log('includes: ' + LongString.includes("추가된 String"));
    }

    render(){
        return(
            <h2>[THIS IS ES6 STRING]</h2>
        )
    }
}

export default R009_Ex6;