import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import axios from 'axios';

const UserFeed = () => {
  const [meedfeed, setMeedfeed] = useState();
  useEffect(() => {
    // axiosWithAuth() won't work on this because the API doesn't require authentication
    // switched back to regular axios call to fix it
    axios
      .get('https://african-marketplace2.herokuapp.com/api/users/:id/products')
      .then(res => {
        console.log('this is from User Feed', res.status);
        console.log(res.data);
        setMeedfeed(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div>
        <h1>Community Market</h1>
      </div>
      <div className='cardContainer'>
        {meedfeed
          ? meedfeed.map(item => (
              <Card className='card'>
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.category_id}</Card.Text>
                  <Card.Text>Location: {item.country}</Card.Text>
                  <Card.Text>Price: {item.price}</Card.Text>
                </Card.Body>
                <Button>Buy</Button>
              </Card>
            ))
          : null}
      </div>
    </>
  );
};

export default UserFeed;
