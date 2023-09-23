// src/components/AddAchievement.js
import './styles.css'; // Import your CSS file
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
      <div className="title-bar">
        {' '}
        {/* Apply the 'title-bar' class */}
        <h2>Add New Achievement</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="description-bar">
          {' '}
          {/* Apply the 'description-bar' class */}
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={newAchievement.title}
            onChange={handleInputChange}
          />
        </div>
        <div className="description-bar">
          {' '}
          {/* Apply the 'description-bar' class */}
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
