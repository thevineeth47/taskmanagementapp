// src/components/TaskForm.js
import React from 'react';
import { useParams } from 'react-router-dom';

function TaskForm() {
  const { id } = useParams(); // For edit functionality
  return (
    <div>
      <h2>{id ? 'Edit Task' : 'Add Task'}</h2>
      {/* Task form will be here */}
    </div>
  );
}

export default TaskForm;
