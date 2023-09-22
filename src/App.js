import './App.css';
import AddAchievement from './components/AddAchievement';
import React, { useState } from 'react';
import AchievementList from './components/AchievementList';

function App() {
  const [achievements, setAchievements] = useState([
    {
      id: 1,
      title: 'Learn React',
      description: 'Master the basics of React.',
      achieved: false,
    },
    {
      id: 2,
      title: 'Build a React App',
      description: 'Create a simple React application.',
      achieved: false,
    },
  ]);

  const [editingAchievement, setEditingAchievement] = useState(null);

  const handleEdit = (editedAchievement) => {
    setEditingAchievement(editedAchievement);
  };

  const handleSaveEdit = (editedAchievement) => {
    // Implement the functionality to save the edited achievement here.
    setAchievements((prevAchievements) =>
      prevAchievements.map((achievement) =>
        achievement.id === editedAchievement.id
          ? editedAchievement
          : achievement
      )
    );
    setEditingAchievement(null); // Close the edit form
  };

  const handleDelete = (deletedAchievement) => {
    // Implement the delete functionality here
    setAchievements((prevAchievements) =>
      prevAchievements.filter(
        (achievement) => achievement.id !== deletedAchievement.id
      )
    );
  };

  const handleAchievedToggle = (toggledAchievement) => {
    // Implement the achievement toggle functionality here
    setAchievements((prevAchievements) =>
      prevAchievements.map((achievement) =>
        achievement.id === toggledAchievement.id
          ? { ...achievement, achieved: !achievement.achieved }
          : achievement
      )
    );
  };

  const handleAddAchievement = (newAchievement) => {
    // Implement the functionality to add a new achievement to the state.
    setAchievements((prevAchievements) => [
      ...prevAchievements,
      {
        id: Math.random().toString(), // You can use a better ID generation method.
        title: newAchievement.title,
        description: newAchievement.description,
        achieved: false,
      },
    ]);
  };

  return (
    <div className="app">
      <h1>Achievement System</h1>
      {editingAchievement ? (
        <EditAchievement
          achievement={editingAchievement}
          onSave={handleSaveEdit}
          onCancel={() => setEditingAchievement(null)}
        />
      ) : (
        <AddAchievement onAdd={handleAddAchievement} />
      )}
      <AchievementList
        achievements={achievements}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onAchievedToggle={handleAchievedToggle}
      />
    </div>
  );
}

export default App;
