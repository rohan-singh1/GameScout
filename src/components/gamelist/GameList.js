import React from 'react'
import PropTypes from 'prop-types'
import Sidebar from "../sidebar/Sidebar";
import { Card, Col, Row, Container } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './GameList.css'
import placeholder from './placeholder.png';


const GameList = props => {

    const data = [
        {
          title: "Card",
          description: "Description",
          image: "https://via.placeholder.com/300",
        },
        {
          title: "Card",
          description: "Description",
          image: "https://via.placeholder.com/300",
        },
        {
          title: "Card",
          description: "Description",
          image: "https://via.placeholder.com/300",
        },
        {
          title: "Card",
          description: "Description",
          image: "https://via.placeholder.com/300",
        },
        {
          title: "Card",
          description: "Description",
          image: "https://via.placeholder.com/300",
        },
        {
          title: "Card",
          description: "Description",
          image: "https://via.placeholder.com/300",
        },
        {
          title: "Card",
          description: "Description",
          image: "https://via.placeholder.com/300",
        },
        {
          title: "Card",
          description: "Description",
          image: "https://via.placeholder.com/300",
        },
        {
          title: "Card",
          description: "Description",
          image: "https://via.placeholder.com/300",
        },
        {
          title: "Card",
          description: "Description",
          image: "https://via.placeholder.com/300",
        },
        {
          title: "Card",
          description: "Description",
          image: "https://via.placeholder.com/300",
        },
        {
          title: "Card",
          description: "Description",
          image: "https://via.placeholder.com/300",
        },
        {
          title: "Card",
          description: "Description",
          image: "https://via.placeholder.com/300",
        },
        {
          title: "Card",
          description: "Description",
          image: "https://via.placeholder.com/300",
        },
        {
          title: "Card",
          description: "Description",
          image: "https://via.placeholder.com/300",
        },
        {
          title: "Card",
          description: "Description",
          image: "https://via.placeholder.com/300",
        },
        {
          title: "Card",
          description: "Description",
          image: "https://via.placeholder.com/300",
        },
      ];
      const navigate = useNavigate();

      const showDetails = (element, id) => {
        console.log(element);
        navigate("/gamedetails");
      };
  return (
    
    <>
      <Sidebar/>

<Container>
        <Row xs={1} md={2} lg={3} className="g-4">
          {data.map((element, id) => (
            <Col key={id}>
              <Card onClick={() => showDetails(element, id)} id="card-custom">
                <Card.Img variant="top" src={placeholder} id="img-custom"/>
                <Card.Body id="card-body-custom">
                  <Card.Title id="caption">{element.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}

GameList.propTypes = {}

export default GameList