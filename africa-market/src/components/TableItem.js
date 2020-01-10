import React from 'react'
import {Table, Button } from 'react-bootstrap';

const ItemTable = props => (
    

  <Table striped bordered hover size="sm" variant="dark" responsive>
    <thead>
      <tr>
        <th>Item Name</th>
        <th>Description</th>
        <th>Price</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.items.length > 0 ? (
        props.items.map(item => (
            <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.description}</td>
            <td>${item.price}</td>
            <td>
            
              <Button variant='secondary'
                onClick={() => {
                  props.editRow(item)
                }}
                className="button muted-button">
                Edit
              </Button>
              <Button variant='danger'
                onClick={() => props.deleteItem(item.id)}>
                Delete
              </Button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No items</td>
        </tr>
      )}
    </tbody>
  </Table>
)

export default ItemTable