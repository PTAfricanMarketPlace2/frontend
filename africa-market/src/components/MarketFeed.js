import React from 'react';
import {DataItems} from './DataItems';
import {Card, Button} from 'react-bootstrap';
// import {axiosWithAuth} from '../axiosWithAuth';
import axios from 'axios';

const UserFeed = () => {


    axios.get('https://african-marketplace2.herokuapp.com/api/users/:id/products')
    .then(res => {
        console.log(res.status);
        console.log(res.data);
    }) 
    .catch(err => {console.log(err)})

    return (
        <>
        
        <div>
        <h1>Community Market</h1>
        </div>
            <div className="cardContainer">
                {DataItems.map(item => ( 
                    
                    <Card className='card'>
                        <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>{item.category_id}</Card.Text>
                        <Card.Text>Location: {item.country}</Card.Text>
                        <Card.Text>Price: {item.price}</Card.Text>
                        </Card.Body>
                        <Button>Buy</Button>
                    </Card>
                    
                ))}
            </div>
        
        </>
    );
};

export default UserFeed;