import React from 'react';
import './App.css';
import R003_ImportComponent from "./R003_ImportComponent";
import R004_LifecycleEx from "./R004_LifecycleEx";
import R005_LifecycleEx from "./R005_LifecycleEx";
import R006_LifecycleEx from "./R006_LifecycleEx";
import R007_LifecycleEx from "./R007_LifecycleEx";
import R008_LifecycleEx from "./R008_LifecycleEx";
import R009_Ex6 from "./R009_Ex6";
import R010_Variable from "./R010_Variable";
import R011_SpreadOperator from "./R011_SpreadOperator";
import R012_ClassPrototype from "./R012_ClassPrototype";
import R013_ArrowFunction from "./R013_ArrowFunction";
import R014_ForEach from "./R014_ForEach";
import R015_Map from "./R015_Map";
import R016_JQuery from "./R016_JQuery";
import R017_Props from "./R017_Props";
import R018_PropsDatatype from "./R018_PropsDatatype";
import R019_PropsDatatype from "./R019_PropsDatatype";
import R020_PropsObjVal from "./R020_PropsObjVal";


/*
<R003_ImportComponent></R003_ImportComponent>
<R004_LifecycleEx></R004_LifecycleEx>
<R005_LifecycleEx></R005_LifecycleEx>
<R006_LifecycleEx prop_value ="FromApp.js"></R006_LifecycleEx>
<R007_LifecycleEx prop_value ="FromApp.js"></R007_LifecycleEx>
<R008_LifecycleEx prop_value ="FromApp.js"></R008_LifecycleEx>
<R009_Ex6></R009_Ex6>
<R010_Variable></R010_Variable>
<R011_SpreadOperator></R011_SpreadOperator>
<R012_ClassPrototype></R012_ClassPrototype>
<R013_ArrowFunction></R013_ArrowFunction>
<R014_ForEach></R014_ForEach>
<R015_Map></R015_Map>
<R016_JQuery></R016_JQuery>
<R017_Props props_val="THIS IS PROPS"></R017_Props>
 <R018_PropsDatatype
          String ="react"
          Number ={200}
          Boolean={1==1}
          Array={[0,1,8]}
          ObjectJSON = {{react:"리액트",twohundred:"200"}}
          Function={console.log("FunctioProps:function!")}
          ></R018_PropsDatatype>
  <R019_PropsDatatype BooleanTrueFalse={false}></R019_PropsDatatype>
          <R019_PropsDatatype BooleanTrueFalse></R019_PropsDatatype>
*/

function App(){
  return (
      <div>
          <h1>Start React 200!</h1>
          <R020_PropsObjVal OjectJSON={{react:"리액트",twohundred:"200"}}></R020_PropsObjVal>
      </div>
  );
}

export default App;