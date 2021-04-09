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
*/

function App(){
  return (
      <div>
          <h1>Start React 200!</h1>
            <R012_ClassPrototype></R012_ClassPrototype>
      </div>
  );
}

export default App;