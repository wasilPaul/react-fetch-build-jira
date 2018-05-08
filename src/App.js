import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { getAllUsers } from './Api/UsersApi';
import { getAllTasks } from './Api/TasksApi';
import TasksView from './Views/TaskView';

class App extends Component {
  componentDidMount() {
    //getAllUsers()
    //getAllTasks()
  }

  render() {
    return (
      <div>
        <TasksView />
      </div>
    )
  }
}

export default App;
