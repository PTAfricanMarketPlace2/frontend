import React from 'react';
import {DataItems} from './DataItems';
import {Card, Button} from 'react-bootstrap';



const UserFeed = () => {



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
                        <Card.Text>{item.description}</Card.Text>
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