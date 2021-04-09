import React, {Component} from "react";

class R011_SpreadOperator extends Component{

    constructor(props) {
        super(props);
        this.state ={};
    }

    componentDidMount() {
        var varArray1 =['num1','num2'];
        var varArray2 =['num3','num4'];
        var sumVarArr =[varArray1[0],varArray1[1],varArray2[0],varArray2[1]];
        console.log("1. :"+sumVarArr);

        let sumLetArr = [...varArray1,...varArray2];
        console.log("2. :"+sumLetArr);

        const[sum1,sum2, ...remain] = sumLetArr;
        console.log("3. :"+sum1);
        console.log("3. :"+sum2);
        console.log("3. :"+remain);

        var varObj1 = {key1:'val1',key2:'val2'};
        var varObj2 = {key2:'new2',key3:'val3'};

        var sumVarObj = Object.assign({},varObj1,varObj2);
        console.log("4. :"+JSON.stringify(sumVarObj));

        var sumLetObj = {...varObj1, ...varObj2};
        console.log("5. : "+JSON.stringify(sumLetObj));

        var {key1,key3,...others} = sumLetObj;
        console.log("6 : "+key1);
        console.log("6 : "+key3);
        console.log("6 : "+JSON.stringify(others));
    }


    render() {
        return(
            <h2>[THIS IS SpreadOperator ]</h2>
        )
    }
}

export default  R011_SpreadOperator