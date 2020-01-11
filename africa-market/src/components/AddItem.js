  
import React, { useState } from 'react'
import {DataItems} from './DataItems';
import {Form, FormLabel, FormGroup, FormControl, Button } from 'react-bootstrap';
import { axiosWithAuth } from '../axiosWithAuth';


const AddItems = props => {
    
    const FormState = { id: null, productName: '', category_id: '', price:'', country:''}
    
	const [ item, setItem ] = useState(FormState)

	const handleInputChange = e => {
        setItem({ ...item, [e.target.name]: e.target.value});
	}

	return (
		<>
		<Form className="form-text"
			onSubmit={e => {
				e.preventDefault()
				axiosWithAuth().post('https://african-marketplace2.herokuapp.com/api/products')
				.then(res => {
					console.log(res.status);
				})
				.catch(err => {console.log(err)})
				// if (!item.name || !item.category_id) return

				// props.addItems(item)
                // setItem(FormState)
                // DataItems.push(item);
			}}
		>
			<FormGroup className='form'>
			<FormLabel>Item Name</FormLabel>
				<FormControl type="text" name="productName" value={item.name} onChange={handleInputChange} />
			</FormGroup>

			<FormGroup className='form'>
				<FormLabel>Price</FormLabel>
				<FormControl type="text" name="price" value={item.price} onChange={handleInputChange} />
			</FormGroup>

			<FormGroup className='form'>
				<FormLabel>Category</FormLabel>
				<FormControl as='select' name="category_id" value={item.category_id} onChange={handleInputChange}>
          			<option>Select the category</option>
          			<option value="1">Animal Products</option>
          			<option value="2">Cereal</option>
          			<option value="3">Fruits</option>
		  			<option value="4">Vegetables</option>
					<option value="5">Seeds & Nuts</option>
					<option value="6">Other</option>
        		</FormControl>
			</FormGroup>

			<FormGroup className='form'>
            	<FormLabel>Location</FormLabel>
        		<FormControl as='select' name="country" value={item.country} 	onChange={handleInputChange}>
          			<option>Select A Country</option>
          			<option value="rwa">Rwanda</option>
          			<option value="uga">Uganda</option>
          			<option value="ken">Kenya</option>
        		</FormControl>
			</FormGroup>

      <Button id='newitmbtn' type='submit'>Add new item</Button>
		</Form>
		</>
	)
}

export default AddItems;