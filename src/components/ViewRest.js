import React,{useState,useEffect} from 'react';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {useParams} from "react-router-dom";


function ViewRest({data}){
    const params = useParams();
    const [allRestaurant, setAllRestaurant] = useState([]);

const getRestaurantData = async () => {
    await fetch("/restaurants.json").then((data) => {
      data.json().then((result) => {
        setAllRestaurant(result.restaurants);
      });
    });
  };

  const restData = allRestaurant.find(item=>item.id == params.id)


  useEffect(() => {
    getRestaurantData();
  }, [restData]);

      return(
        <>
        {
            restData?(
                <Col className ="p-3" sm={12} md={6} lg={4} xl={3}>
                <Container>
                  <Card className="text-center" style={{ width: "18rem" }} key = {restData.id}>
                    <Card.Img className =" p-2 rounded-pill" variant="top" src={restData.photograph} />
                    <Card.Body>
                      <Card.Title>{restData.name}</Card.Title>
                      <Card.Text>
                        {restData.address} {restData.neighborhood}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Container>
              </Col>
            ):"null"
        }
        
        </>
      )

   

    
 
    
}

export default ViewRest;