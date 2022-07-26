import './App.css';

import React, { useState } from 'react';
function App() {
  //states
  const [newItem, setNewItem] = useState('');
  const [items, setItems] = useState([]);

  //helper functions
  const addItem = () => {
    if (!newItem) {
      alert('Enter an item');
      return;
    }
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };
    setItems(oldList => [...oldList, item]);
    setNewItem('');
    console.log(items);
  };
  const deleteItem = id => {
    console.log('deleted');
    const newArray = items.filter(item => item.id !== id);
    setItems(newArray);
  };
  return (
    <div className="App">
      <h1>Todo List App</h1>
      <input
        type="text"
        placeholder="add an item..."
        onChange={e => setNewItem(e.target.value)}
        value={newItem}
      />
      <button onClick={() => addItem()}>Add</button>
      <ul>
        {items.map(item => {
          return (
            <li key={item.id}>
              {item.value}{' '}
              <button onClick={() => deleteItem(item.id)}>X</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
