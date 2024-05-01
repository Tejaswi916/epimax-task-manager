import React, { Component } from 'react';
import Task from '../Task';
import TaskForm from '../TaskForm'

class TaskManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {
          id: 1,
          title: 'Create React App',
          description: 'Set up a new React project',
          status: 'todo',
          assignee_id: 1,
          created_at: '2022-05-01',
          updated_at: '2024-05-13'
        },
        {
          id: 2,
          title: 'Implement Task Component',
          description: 'Create a Task component for displaying tasks',
          status: 'completed',
          assignee_id: 2,
          created_at: '2023-12-01',
          updated_at: '2024-10-20'
        },
        {
            id: 3,
            title: 'Create Movie App',
            description: 'Create App like Netflix use hooks',
            status: 'inprogress',
            assignee_id: 3,
            created_at: '2024-02-12',
            updated_at: '2024-05-02'
          },
       
      ]
    };
  }

  handleAddTask = (newTask) => {
    this.setState(prevState => ({
      tasks: [...prevState.tasks, newTask]
    }));
  };

  handleStatusChange = (taskId, newStatus) => {
    const updatedTasks = this.state.tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, status: newStatus };
      }
      return task;
    });

    this.setState({ tasks: updatedTasks });
  };

  render() {
    const { tasks } = this.state;

    return (
      <div>
        <h1>Task Manager</h1>
        <TaskForm onAddTask={this.handleAddTask} />
        <h1>Task Lists</h1>
        {tasks.map(task => (
          <Task key={task.id} task={task} onStatusChange={this.handleStatusChange} />
        ))}
      </div>
    );
  }
}

export default TaskManager;
