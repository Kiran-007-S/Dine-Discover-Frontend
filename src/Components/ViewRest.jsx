import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import RestOp from "./RestOp";
import RestReview from "./RestReview";


function ViewRest() {
  const { id } = useParams();
  console.log(id);

  const base_url = "https://dine-discover-backend-clck.onrender.com/restaurants";
  const [restDetails, SetrestDetails] = useState({});
  const fetchRest = async () => {
    const result = await axios.get(`${base_url}/${id}`);
    SetrestDetails(result.data);
  };

  useEffect(() => {
    fetchRest();
  },);
  console.log(restDetails);
  return (
    <div>
      <Row>
        <Col sm={12} lg={6}>
          <img
            src={restDetails.photograph}
            className="m-4"
            alt=""
            style={{ width: "26rem", height: "35rem", }}
          />
        </Col>
        <Col sm={12} lg={6}>
          <div className="d-flex justify-content-start py-5">
            <ListGroup className="m-4 py-5">
              <h2>{restDetails.name}</h2>
              <ListGroup.Item>Address : {restDetails.address}</ListGroup.Item>
              <ListGroup.Item>Cusine type : {restDetails.cuisine_type}</ListGroup.Item>
              <ListGroup.Item><RestOp op={restDetails.operating_hours}/></ListGroup.Item>
              <ListGroup.Item><RestReview review={restDetails.reviews}/></ListGroup.Item>
            </ListGroup>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default ViewRest;
