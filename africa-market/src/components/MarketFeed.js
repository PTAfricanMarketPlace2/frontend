import React, {useState, useEffect} from 'react';
import {DataItems} from './DataItems';
import {Card, Button} from 'react-bootstrap';
import axios from 'axios';
import { axiosWithAuth } from '../axiosWithAuth';

const UserFeed = () => {
    const [meedfeed, setMeedfeed] = useState()
    useEffect(() => {
        axiosWithAuth().get('https://african-marketplace2.herokuapp.com/api/products/')
        .then(res => {
            console.log('this is from User Feed', res.status);
            console.log(res.data);
            setMeedfeed(res.data)
        }) 
        .catch(err => {console.log(err)})  
      },[]);

    

    return (
        <>
        
        <div>
        <h1>Community Market</h1>
        </div>
            <div className="cardContainer">
                {meedfeed ? meedfeed.map(item => ( 
                    
                    <Card className='card'>
                        <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>{item.category_id}</Card.Text>
                        <Card.Text>Location: {item.country}</Card.Text>
                        <Card.Text>Price: {item.price}</Card.Text>
                        </Card.Body>
                        <Button>Buy</Button>
                    </Card>
                    
                )) : null}
            </div>
        
        </>
    );
};

export default UserFeed;