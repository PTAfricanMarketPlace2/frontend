import React, { useState, Fragment } from 'react';
import TableItem from './TableItem';
import AddItem from './AddItem';


const UserItems = () => {

    // Sample Data Added To show info
    const dataItems = [
        { id: 1, name: "Eggs", category_id: "Animal Products", price: "2.00" },
        
    ];

    // State Set for items
    const [items, setItems] = useState(dataItems);

    // add items 
    const addItem = item => {
        item.id = items.length + 1;
        setItems([...items, item]);
    };

    // Delete item
    const deleteItem = id => {
        setItems(items.filter(item => item.id !== id));
    };

       
    return (
    <div className="section">
        <h1>User African Market List Items</h1>
        <div className="userForm">
            <div id='additemsform' className="flex-large">
                <Fragment>
                    <h2>Add New Item</h2>
                    <div>
                    <AddItem addItems={addItem} />
                    </div>
                </Fragment>
                
            </div>
            <div id='useritems' className="flex-large">
                <h2>My item placed in the Market</h2>
                <div>
                <TableItem items={items} deleteItem={deleteItem}/>
                </div>
            </div>
        </div>
        </div>
    )
}

export default UserItems;