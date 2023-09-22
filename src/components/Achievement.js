// src/components/Achievement.js

import React from 'react';

function Achievement({ achievement, onEdit, onDelete, onAchievedToggle }) {
  const achievementClasses = `achievement ${
    achievement.achieved ? 'achieved' : ''
  }`;

  return (
    <div className={achievementClasses}>
      <div className="achievement-details">
        <h2>{achievement.title}</h2>
        <p>{achievement.description}</p>
      </div>
      <div className="achievement-actions">
        <button className="edit-button" onClick={() => onEdit(achievement)}>
          Edit
        </button>
        <button className="delete-button" onClick={() => onDelete(achievement)}>
          Delete
        </button>
        <button
          className={`${
            achievement.achieved ? 'unachieved-button' : 'achieved-button'
          }`}
          onClick={() => onAchievedToggle(achievement)}
        >
          {achievement.achieved ? 'Mark Unachieved' : 'Mark Achieved'}
        </button>
      </div>
    </div>
  );
}

export default Achievement;
