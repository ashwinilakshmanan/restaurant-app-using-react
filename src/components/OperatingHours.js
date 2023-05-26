import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ListGroup from "react-bootstrap/ListGroup";

function OperatingHours({ time }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Operating Hours
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Operating Hours</Modal.Title>
        </Modal.Header>
        <Modal.Body varient="dark" >
          <ListGroup>
            <ListGroup.Item>Monday : {time.Monday}</ListGroup.Item>
            <ListGroup.Item>Tuesday : {time.Tuesday}</ListGroup.Item>
            <ListGroup.Item>Wednesday : {time.Wednesday}</ListGroup.Item>
            <ListGroup.Item>Thursday : {time.Thursday}</ListGroup.Item>
            <ListGroup.Item>Friday : {time.Friday}</ListGroup.Item>
            <ListGroup.Item>Saturday : {time.Saturday}</ListGroup.Item>
            <ListGroup.Item>Sunday : {time.Sunday}</ListGroup.Item>
          </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default OperatingHours;
