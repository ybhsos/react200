import React from 'react';
import './App.css';
import R003_ImportComponent from "./R003_ImportComponent";
import R004_LifecycleEx from "./R004_LifecycleEx";

function App(){
  return (
      <div>
          <h1>Start React 200!</h1>
          <R003_ImportComponent></R003_ImportComponent>
          <R004_LifecycleEx></R004_LifecycleEx>
      </div>
  );
}

export default App;