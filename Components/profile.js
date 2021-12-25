import React , {useState} from 'react';
import {Card,Button} from 'react-bootstrap';



function profile(props) {
    return (
        <div className="profile">
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={props.x.image} />
  <Card.Body>
    <Card.Title>{props.x.name}</Card.Title>
    <Card.Text>
     {props.x.bio}
    </Card.Text>
    <Button variant="primary"></Button>
  </Card.Body>
</Card>
        </div>
    )
}

export default profile

