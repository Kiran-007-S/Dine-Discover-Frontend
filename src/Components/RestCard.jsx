import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBRipple,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

function RestCard({ restaurants }) {
  console.log(restaurants);
  return (
    <Link to={`view/${restaurants.id}`} style={{textDecoration:'none'}}>
      <MDBCard className="my-4">
        <MDBRipple
          rippleColor="light"
          rippleTag="div"
          className="bg-image hover-overlay"
        >
          <MDBCardImage src={restaurants.photograph} fluid alt="..." />
        </MDBRipple>
        <MDBCardBody>
          <MDBCardTitle>{restaurants.name}</MDBCardTitle>
          <MDBCardText>{restaurants.address}</MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </Link>
  );
}

export default RestCard;
