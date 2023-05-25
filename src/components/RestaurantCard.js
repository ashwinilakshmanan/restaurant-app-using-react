import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function RestaurantCard({ data }) {
  const navigate = useNavigate();

  return (
    <>
    <Col className="p-3" sm={12} md={6} lg={4} xl={3}>
      <Link style ={{textDecoration:"none"}} to={`/view-rest/${data.id}`}>
        
          <Container>
            <Card className="text-center" style={{ width: "18rem" }} >
              <Card.Img
                className=" p-2 rounded-pill"
                variant="top"
                src={data.photograph}
              />
              <Card.Body>
                <Card.Title>{data.name}</Card.Title>
                <Card.Text>
                  {data.address} {data.neighborhood}
                </Card.Text>
              </Card.Body>
            </Card>
          </Container>
       
      </Link>
      </Col>
    </>
  );
}

export default RestaurantCard;
