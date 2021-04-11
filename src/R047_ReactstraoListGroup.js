import React,{Component} from "react";
import {ListGroup, ListGroupItem, Badge} from "reactstrap";

class R047_ReactstraoListGroup extends Component{


    render() {
        return (
            <>
            <ListGroup>
                <ListGroupItem color="danger" className="justify-content-between">
                    Badge<Badge pill>200</Badge>
                </ListGroupItem>
                <ListGroupItem disabled tag="a" href="#">Disable</ListGroupItem>
                <ListGroupItem tag="a" href="http://www.naver.com">Link</ListGroupItem>
                <ListGroupItem tag="button" action onClick={e=>alert("button")}>button</ListGroupItem>
            </ListGroup>
            </>

        );
    }


}

export default R047_ReactstraoListGroup;
