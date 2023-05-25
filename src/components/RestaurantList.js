import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function RestaurantList() {
  const [allRestaurant, setAllRestaurant] = useState([]);

  //function to call data inside json file
  const getRestaurantData = async () => {
    await fetch("/restaurants.json").then((data) => {
      data.json().then((result) => {
        setAllRestaurant(result.restaurants);
      });
    });
  };

  console.log(allRestaurant);
  useEffect(() => {
    getRestaurantData();
  }, []);
  return (
    <>
      <Row>
        {allRestaurant.map((data) => (
          <RestaurantCard data={data} />
        ))}
      </Row>
    </>
  );
}

export default RestaurantList;
