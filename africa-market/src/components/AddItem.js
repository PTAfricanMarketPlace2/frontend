  
import React, { useState } from 'react'
import {DataItems} from './DataItems';
import {Form, FormLabel, FormGroup, FormControl, Button } from 'react-bootstrap';


const AddItems = props => {
    
    const FormState = { id: null, name: '', description: '', price:'', country:''}
    
	const [ item, setItem ] = useState(FormState)

	const handleInputChange = e => {
        setItem({ ...item, [e.target.name]: e.target.value});
	}

	return (
		<>
		<Form className="form-text"
			onSubmit={e => {
				e.preventDefault()
				if (!item.name || !item.description) return

				props.addItems(item)
                setItem(FormState)
                DataItems.push(item);
			}}
		>
			<FormGroup className='form'>
			<FormLabel>Item Name</FormLabel>
				<FormControl type="text" name="name" value={item.name} onChange={handleInputChange} />
			</FormGroup>

			<FormGroup className='form'>
				<FormLabel>Price</FormLabel>
				<FormControl type="text" name="price" value={item.price} onChange={handleInputChange} />
			</FormGroup>

			<FormGroup className='form'>
				<FormLabel>Category</FormLabel>
				<FormControl as='select' name="description" value={item.description} onChange={handleInputChange}>
          			<option>Select the category</option>
          			<option value="Eggs">Eggs</option>
          			<option value="Livestock">Livestock</option>
          			<option value="Wheat">Wheat Flour</option>
		  			<option value="Grain">Whole Grain</option>
					<option value="Whole">Whole Flour</option>
					<option value="Beans">Beans</option>
        		</FormControl>
			</FormGroup>

			<FormGroup className='form'>
            	<FormLabel>Location</FormLabel>
        		<FormControl as='select' name="country" value={item.country} 	onChange={handleInputChange}>
          			<option>Select A Location</option>
          			<option value="Rwanda">Rwanda</option>
          			<option value="Uganda">Uganda</option>
          			<option value="Kenya">Kenya</option>
        		</FormControl>
			</FormGroup>

      <Button id='newitmbtn' type='submit'>Add new item</Button>
		</Form>
		</>
	)
}

export default AddItems;