import React,{Component} from "react";
import {Button,UncontrolledPopover, PopoverHeader, PopoverBody} from "reactstrap";

class R051_ReactstrapPopover extends Component{


    render() {
        return (
            <>
                <Button id="Popover_id" type="button">
                    Popover button
                </Button>
                <UncontrolledPopover placement="top" target="Popover_id">
                    <PopoverHeader>React 200</PopoverHeader>
                    <PopoverBody>Aenean id magna</PopoverBody>
                </UncontrolledPopover>
            </>
        );
    }


}
export default R051_ReactstrapPopover