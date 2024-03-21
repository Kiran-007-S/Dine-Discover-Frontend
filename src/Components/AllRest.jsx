import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Col,Row} from 'react-bootstrap';
import RestCard from './RestCard';

function AllRest() {

  const base_url = 'https://dine-discover-backend-clck.onrender.com/restaurants';

  const [AllRestdata,setAllRestdata] = useState([])

  const fetchData=async()=>{
    const result = await axios.get(base_url)
    console.log(result.data);
    setAllRestdata(result.data)
  }

  console.log(AllRestdata)
  useEffect(()=>{fetchData()},[])
  return (
    <div>
       <Row className='m-3'>
           {
             AllRestdata.map(item=>(
               <Col sm={12} md={6} lg={4} xl={3}>
                   <RestCard restaurants={item}/>
               </Col>
             ))
           }
       </Row>
    </div>
  )
}

export default AllRest
