import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
  import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
          <Link to = '/'style={{textDecoration:'none'}}>
          <MDBNavbarBrand>
            <i class="fa-solid fa-utensils mx-3 fs-2"></i>
            <span style={{ fontSize: '3rem', fontWeight: 'bold' }}>Dine Discover</span>
          </MDBNavbarBrand>
          </Link>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header
