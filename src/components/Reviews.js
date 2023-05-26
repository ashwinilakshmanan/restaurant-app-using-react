import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Collapse from "react-bootstrap/Collapse";

function Reviews({ review }) {
  const [open, setOpen] = useState(false);
  console.log("name", review.name);
  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Reviews
      </Button>
      <div style={{ minHeight: "150px" }}>
        <Collapse in={open} dimension="width">
          <div id="example-collapse-text">
            {review.map((data) => (
                <Card body style={{ width: "400px" }}>
                   <h5>{data.name}</h5> 
                </Card>
            ))}
            
          </div>
        </Collapse>
      </div>
    </>
  );
}

export default Reviews;
