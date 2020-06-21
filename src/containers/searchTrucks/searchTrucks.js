import React, { Component } from "react"
import {Button, Col, Form} from "react-bootstrap";

export class SearchTrucks extends Component{
    render(){
        return(
            <div className='searchWrapper'>
                <Form inline>
                    <Form.Label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">
                        Location
                    </Form.Label>
                    <Form.Row>
                        <Col>
                            <Form.Control placeholder="Latitude" defaultValue="37.7821"/>
                        </Col>
                        <Col>
                            <Form.Control placeholder="Longitude" defaultValue="-122.3938"/>
                        </Col>
                        <Col className="rightMobile">
                            <Button type="submit">Search</Button>
                        </Col>
                    </Form.Row>
                </Form>
                <Form className="pt-3">
                    <Form.Group controlId="formBasicRange">
                        <Form.Label>Results displayed (5 minimum)</Form.Label>
                        <Form.Control type="range" />
                    </Form.Group>
                </Form>
            </div>
        )
    }
}

export default SearchTrucks;
