import React, { Component } from "react";
import Map from '../map/Map'
import SearchTrucks from "../searchTrucks/searchTrucks";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import Trucks from "../truckInfo/truckInfo";
/*import TruckList from "../trucklist/truckList";*/

export class Home extends Component{
    render(){
        return(
            <div className="home">
                <Container className="home-main" fluid>
                    {/*<TruckList />*/}
                    <Row>
                        <Col>
                            <SearchTrucks />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} md={4}>
                            <Trucks />
                            {/*<TruckList />*/}
                        </Col>
                        <Col sm={12} md={8}>
                            <Map />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Home;

