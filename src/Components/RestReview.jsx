import React from 'react';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ListGroup from "react-bootstrap/ListGroup";

function RestReview({review}) {
  console.log(review);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <p onClick={handleShow}>Reviews</p>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Reviews</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body >
          {
            review?.map(item=>(
                <ListGroup className='mb-3'>
                  <ListGroup.Item>Name : {item.name}</ListGroup.Item>
                  <ListGroup.Item>Date : {item.date}</ListGroup.Item>
                  <ListGroup.Item>Rating : {item.rating}</ListGroup.Item>
                  <ListGroup.Item>comments : {item.comments}</ListGroup.Item>
               </ListGroup>
                ))
          }
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}

export default RestReview;