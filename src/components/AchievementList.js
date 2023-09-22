// src/components/AchievementList.js

import React from 'react';
import Achievement from './Achievement';

function AchievementList({ achievements, onEdit, onDelete, onAchievedToggle }) {
  return (
    <div>
      {achievements.map((achievement) => (
        <Achievement
          key={achievement.id}
          achievement={achievement}
          onEdit={onEdit}
          onDelete={onDelete}
          onAchievedToggle={onAchievedToggle}
        />
      ))}
    </div>
  );
}

export default AchievementList;
