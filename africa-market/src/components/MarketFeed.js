import React from 'react';
import {DataItems} from './DataItems';
import {Card} from 'react-bootstrap';



const UserFeed = ({deleteItem}) => {

    return (
        <>
        
        <div>
        <h1>Community Market</h1>
        </div>
            <div className="cardContainer">
                {DataItems.map(item => ( 
                    
                        <Card className='card'>
                            <Card.Img className="productPic" src={item.url} alt={item.name} />
                            <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Text>{item.description}</Card.Text>
                            <Card.Text>Location: {item.country}</Card.Text>
                            <Card.Text>Price: {item.price}</Card.Text>
                            </Card.Body>
                        </Card>
                    
                ))}
            </div>
        
        </>
    );
};

export default UserFeed;