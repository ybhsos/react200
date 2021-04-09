import React,{Component} from "react";

class R008_LifecycleEx extends Component{

    static getDerivedStateFromProps(props, state){
        console.log("2.  getDerivedStateFromProps call :"+ props.prop_value);
        return {tmp_state:props.prop_value};
    }

    constructor(props) {
        super(props);
        this.state = {};
        console.log('1. constructor Call');
    }

    componentDidMount() {
        console.log('4');
        console.log('5 :'+this.state.tmp_state);
        this.setState({tmp_state2: true});
    }

    shouldComponentUpdate(props,state){
        console.log('6 :'+ state.tmp_state2);
        return  state.tmp_state2;
    }
    /*
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('6 :'+ state.tmp_state2);
        return  state.tmp_state2;
    }
    */

    render() {
        console.log('3. render Call');
        return(
            <h2>[THIS IS CONSTRUCTOR FUNCTION]</h2>
        )
    }



}

export default R008_LifecycleEx;