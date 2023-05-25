import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function RestaurantCard({ data }) {
  return (
    <>
      <Col className ="p-3" sm={12} md={6} lg={4} xl={3}>
        <Container>
          <Card className="text-center" style={{ width: "18rem" }}>
            <Card.Img className =" p-2 rounded-pill" variant="top" src={data.photograph} />
            <Card.Body>
              <Card.Title>{data.name}</Card.Title>
              <Card.Text>
                {data.address} {data.neighborhood}
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </Col>
    </>
  );
}

export default RestaurantCard;
