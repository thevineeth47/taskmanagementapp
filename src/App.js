// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import CategorySlider from './components/CategorySlider';

function App() {
  return (
    <Router>
      <div className="app-container">
        <h1>Task Management Application</h1>
        <CategorySlider />
        <Switch>
          <Route path="/" exact component={TaskList} />
          <Route path="/add-task" component={TaskForm} />
          <Route path="/edit-task/:id" component={TaskForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
