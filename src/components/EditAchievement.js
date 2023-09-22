// src/components/EditAchievement.js

import React, { useState } from 'react';

function EditAchievement({ achievement, onSave, onCancel }) {
  const [editedAchievement, setEditedAchievement] = useState({
    ...achievement,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedAchievement({ ...editedAchievement, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(editedAchievement);
  };

  return (
    <div>
      <h2>Edit Achievement</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={editedAchievement.title}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={editedAchievement.description}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Save</button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default EditAchievement;
