// src/components/AddAchievement.js

import React, { useState } from 'react';

function AddAchievement({ onAdd }) {
  const [newAchievement, setNewAchievement] = useState({
    title: '',
    description: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAchievement({ ...newAchievement, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(newAchievement);
    setNewAchievement({ title: '', description: '' });
  };

  return (
    <div>
      <h2>Add New Achievement</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={newAchievement.title}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={newAchievement.description}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Add Achievement</button>
      </form>
    </div>
  );
}

export default AddAchievement;
