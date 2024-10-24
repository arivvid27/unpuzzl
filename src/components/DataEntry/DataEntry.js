import React, { useState } from 'react';
import { db } from '../../firebase/firebase'; // Adjust path if needed
import { collection, addDoc } from 'firebase/firestore'; // Import Firestore functions

const DataEntry = () => {
  const [name, setName] = useState('');
  const [type, setType] = useState('Behavior');
  const [items, setItems] = useState(0);
  const [change, setChange] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const newBehavior = {
        name,
        type,
        items: parseInt(items),
        change: parseInt(change),
      };
      // Add a new document with the data to the Firestore 'behaviors' collection
      await addDoc(collection(db, 'behaviors'), newBehavior);
      resetForm(); // Reset form fields after submission
      alert('Data saved successfully!');
    } catch (error) {
      console.error('Error saving data to Firestore:', error);
      alert('Failed to save data.');
    }
  };

  const resetForm = () => {
    setName('');
    setType('Behavior');
    setItems(0);
    setChange(0);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Data Entry</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <select
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 rounded-md p-2 w-full"
            required
          >
            <option value="">Select Behavior</option>
            <option value="Positive Reinforcement">Positive Reinforcement</option>
            <option value="Task Completion">Task Completion</option>
            <option value="Class Participation">Class Participation</option>
            <option value="Social Interactions">Social Interactions</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Type</label>
          <input
            type="text"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="border border-gray-300 rounded-md p-2 w-full"
            disabled
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Items</label>
          <input
            type="number"
            value={items}
            onChange={(e) => setItems(e.target.value)}
            className="border border-gray-300 rounded-md p-2 w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Change</label>
          <input
            type="number"
            value={change}
            onChange={(e) => setChange(e.target.value)}
            className="border border-gray-300 rounded-md p-2 w-full"
            required
          />
        </div>

        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
};

export default DataEntry;
