import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useParams } from "react-router-dom";
import { Image, Button } from "react-bootstrap";
import OperatingHours from "./OperatingHours";
import Reviews from "./Reviews";

function ViewRest({ data }) {
  const params = useParams();
  const [allRestaurant, setAllRestaurant] = useState([]);

  const getRestaurantData = async () => {
    await fetch("/restaurants.json").then((data) => {
      data.json().then((result) => {
        setAllRestaurant(result.restaurants);
      });
    });
  };

  const restData = allRestaurant.find((item) => item.id == params.id);

  useEffect(() => {
    getRestaurantData();
  }, []);

  return (
    <>
      {restData ? (
        <Row>
          <Col>
            <Image className="p-5" src={restData.photograph} fluid />
          </Col>
          <Col className="mt-5">
            <h1>{restData.name}</h1>
            <h3>{restData.neighborhood}</h3>
            <h4>cusine Type : {restData.cusine_type}</h4>
            <h4>{restData.address}</h4>

            <OperatingHours time={restData.operating_hours} />
            <div className ="mt-4"> <Reviews review={restData.reviews} /></div>
          </Col>
        </Row>
      ) : (
        "null"
      )}
    </>
  );
}

export default ViewRest;
