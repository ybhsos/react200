import React from 'react';
//import './App.css';
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
import R021_PropsRequired from "./R021_PropsRequired";
import R022_PropsDefault from "./R022_PropsDefault";
import R023_PropsNode from "./R023_PropsNode";
import R024_ReactState from "./R024_ReactState";
import R025_SetState from "./R025_SetState";
import R026_forceUpdate from "./R026_forceUpdate";
import R027_ComponentClass from "./R027_ComponentClass";
import R028_PureComponentClass from "./R028_PureComponentClass";
import R029_ShallowEqual from "./R029_ShallowEqual";
import R030_FunctionComponent from "./R030_FunctionComponent";
import R031_ReactHook from "./R031_ReactHook";
import R032_Fragments from "./R032_Fragments";
import R033_ReturnMap from "./R033_ReturnMap";
import R034_ReactstrapAlerts from "./R034_ReactstrapAlerts";
import 'bootstrap/dist/css/bootstrap.css';
import R035_ReactstrapBadges from "./R035_ReactstrapBadges";
import R036_ReactstraoBreadcrumbs from "./R036_ReactstraoBreadcrumbs";
import R037_ReactstrapDropdown from "./R037_ReactstrapDropdown";
import R038_ReactstrapButtonGroup from "./R038_ReactstrapButtonGroup";
import R039_ReactstrapBottons from "./R039_ReactstrapBottons";
import R040_ReactstrapCard from "./R040_ReactstrapCard";
import R041_ReactstrapCarousel from "./R041_ReactstrapCarousel";
import R042_ReactstrapCollapse from "./R042_ReactstrapCollapse";
import R043_ReactstrapFade from "./R043_ReactstrapFade";
import R044_ReactstrapForm from "./R044_ReactstrapForm";
import R045_ReactstrapInputGroup from "./R045_ReactstrapInputGroup";
import R046_ReactstrapDumbotron from "./R046_ReactstrapDumbotron";
import R047_ReactstraoListGroup from "./R047_ReactstraoListGroup";
import R048_ReactsstrapModel from "./R048_ReactsstrapModel";
import R049_ReactstrapModal from "./R049_ReactstrapModal";
import R050_ReactstrapModal from "./R050_ReactstrapModal";
import R051_ReactstrapPopover from "./R051_ReactstrapPopover";
import R052_ReactstrapPopover from "./R052_ReactstrapPopover";
import R053_ReactstrapSpinner from "./R053_ReactstrapSpinner";
import R054_ReactstrapTable from "./R054_ReactstrapTable";
import R055_ReactstrapTab from "./R055_ReactstrapTab";
import R056_Sweetalert2Basic from "./R056_Sweetalert2Basic";
import R057_Sweetalert2Position from "./R057_Sweetalert2Position";
import R058_Sweetalert2Confirm from "./R058_Sweetalert2Confirm";
import R059_FetchGet from "./R059_FetchGet";
import R060_FetchPost from "./R060_FetchPost";
import R061_AxiosGet from "./R061_AxiosGet";
import R062_AxiosPost from "./R062_AxiosPost";
import R063_CallbackFunc from "./R063_CallbackFunc";
import R064_Promise from "./R064_Promise";
import R065_Promise from "./R065_Promise";
import R066_Promise from "./R066_Promise";
import R067_onChanage from "./R067_onChanage";
import R068_onMouseMove from "./R068_onMouseMove";
import R069_onMouseOver from "./R069_onMouseOver";
import R070_onMouseOut from "./R070_onMouseOut";

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
<R020_PropsObjVal OjectJSON={{react:"리액트",twohundred:"200"}}></R020_PropsObjVal>
<R021_PropsRequired ReactNumber={200}></R021_PropsRequired>
<R022_PropsDefault ReactNumber ={200}></R022_PropsDefault>
<R023_PropsNode>
<span>node from App.js</span>
</R023_PropsNode>
<R024_ReactState reactString={"react"}></R024_ReactState>
<R025_SetState></R025_SetState>
<R026_forceUpdate></R026_forceUpdate>
<R027_ComponentClass></R027_ComponentClass>
<R028_PureComponentClass></R028_PureComponentClass>
<R029_ShallowEqual></R029_ShallowEqual>
<R030_FunctionComponent contents ="[THIS IS FunctionComponent]"></R030_FunctionComponent>
<R031_ReactHook></R031_ReactHook>
<R032_Fragments></R032_Fragments>
<R033_ReturnMap></R033_ReturnMap>
<R035_ReactstrapBadges></R035_ReactstrapBadges>
<R036_ReactstraoBreadcrumbs></R036_ReactstraoBreadcrumbs>
<R037_ReactstrapDropdown></R037_ReactstrapDropdown>
<R038_ReactstrapButtonGroup></R038_ReactstrapButtonGroup>
<R039_ReactstrapBottons></R039_ReactstrapBottons>
<R040_ReactstrapCard></R040_ReactstrapCard>
<R041_ReactstrapCarousel></R041_ReactstrapCarousel>
<R042_ReactstrapCollapse></R042_ReactstrapCollapse>
<R043_ReactstrapFade></R043_ReactstrapFade>
<R044_ReactstrapForm></R044_ReactstrapForm>
<R045_ReactstrapInputGroup></R045_ReactstrapInputGroup>
<R046_ReactstrapDumbotron></R046_ReactstrapDumbotron>
<R047_ReactstraoListGroup></R047_ReactstraoListGroup>
<R048_ReactsstrapModel></R048_ReactsstrapModel>
<R049_ReactstrapModal></R049_ReactstrapModal>
<R050_ReactstrapModal></R050_ReactstrapModal>
<R051_ReactstrapPopover></R051_ReactstrapPopover>
<R052_ReactstrapPopover></R052_ReactstrapPopover>
<R053_ReactstrapSpinner></R053_ReactstrapSpinner>
<R054_ReactstrapTable></R054_ReactstrapTable>
<R055_ReactstrapTab></R055_ReactstrapTab>
<R056_Sweetalert2Basic></R056_Sweetalert2Basic>
<R057_Sweetalert2Position></R057_Sweetalert2Position>
<R058_Sweetalert2Confirm></R058_Sweetalert2Confirm>
<R059_FetchGet></R059_FetchGet>
<R060_FetchPost></R060_FetchPost>
<R061_AxiosGet></R061_AxiosGet>
<R062_AxiosPost></R062_AxiosPost>
<R063_CallbackFunc></R063_CallbackFunc>
<R064_Promise></R064_Promise>
<R065_Promise></R065_Promise>
<R066_Promise></R066_Promise>
<R067_onChanage></R067_onChanage>
<R068_onMouseMove></R068_onMouseMove>
<R069_onMouseOver></R069_onMouseOver>
*/

function App(){
  return (
      <div>
          <h1>Start React 200!</h1>
          <p>CSS 적용하기</p>
          <R070_onMouseOut></R070_onMouseOut>
      </div>
  );
}

export default App;