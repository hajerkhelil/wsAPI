

import React from 'react'
import { Card,Button } from "react-bootstrap"
import {Link} from "react-router-dom"
function User() {
    return (
        <div>
  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Link  to={`/details/${User.id}`}> <Button variant="primary">Go somewhere</Button> </Link>
  </Card.Body>
</Card>
        </div>
    )
}

export default User
