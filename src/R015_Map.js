import React,{Component} from "react";

class R015_Map extends Component{

    componentDidMount() {
        var Map_Arr = [3,2,8,8];
        let Map_newArr = Map_Arr.map(x => x);
        console.log("1  . :" + Map_newArr);

        let Map_Mul = Map_Arr.map(x=>x*2);
        console.log("2  . :"+ Map_Mul);

        var ObjArray = [{key:'react',value:'208'},
            {key:'리액트',value: "TwoHundred"}
        ]

        let Map_objArr = ObjArray.map((obj,index)=>{
            console.log((index+3)+"     "+JSON.stringify(obj))
            var Obj = {};
            obj[obj.key] = obj.value;
            return obj;
        })

        console.log("5     :"+JSON.stringify((Map_objArr)))
    }


    render() {
        return(
            <h2>[THIS IS MAP]</h2>
        )
    }


}

export default R015_Map;