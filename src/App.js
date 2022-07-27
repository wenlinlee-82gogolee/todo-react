import React, { useState } from 'react';
function App() {
  //states
  const [newItem, setNewItem] = useState('');
  const [items, setItems] = useState([]);
  const [error, setError] = useState('');
  const [updateItem, setUpdateItem] = useState('');

  //helper functions
  const addItem = () => {
    if (!newItem) {
      setError('Please enter an item!');
      return;
    }
    setError('');
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };
    setItems(oldList => [...oldList, item]);
    setNewItem('');
  };
  const deleteItem = id => {
    const newArray = items.filter(item => item.id !== id);
    setItems(newArray);
  };

  return (
    <div className="flex justify-center items-center flex-col min-h-full p-3">
      <h1 className="text-3xl p-2 text-orange-500 font-semibold">Todo List</h1>
      <input
        className="p-2 outline m-2 rounded-lg shadow-md w-60 text-green-500"
        type="text"
        placeholder="add an item..."
        onChange={e => setNewItem(e.target.value)}
        value={newItem}
      />
      <button className="p-2" onClick={() => addItem()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-orange-300"
        >
          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z" />
        </svg>
      </button>
      <p className="text-orange-700 font-bold p-2">{error}</p>
      <ul>
        {items.map(item => {
          return (
            <li
              key={item.id}
              className="text-2xl flex items-center text-green-500 font-bold p-2"
            >
              {item.value}
              <button className="pl-2" onClick={() => deleteItem(item.id)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  className="fill-orange-500 "
                >
                  <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
                </svg>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
