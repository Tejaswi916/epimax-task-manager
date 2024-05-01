import React, { Component } from 'react';
import './index.css'; 

const users = [
    { id: 1, name: 'Elun musk' },
    { id: 2, name: 'Sunder pichai' },
    { id: 3, name: 'Jef bejos' },
    { id: 4, name: 'Mark juker burg'}
  ];

class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      assignee_id: '',
      status: 'todo' 
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { title, description, assignee_id, status } = this.state;

    // Create a new task object
    const newTask = {
      title,
      description,
      assignee_id,
      status,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };

    // Call the parent component's function to add the new task
    this.props.onAddTask(newTask);

    // Reset form fields
    this.setState({
      title: '',
      description: '',
      assignee_id: '',
      status: 'todo' 
    });
  };

  render() {
    return (
      <div>
        <h2>Add New Task</h2>
        <form onSubmit={this.handleSubmit} className="task-form">
          <div className="form-group">
            <label>Title:</label>
            <input type="text" name="title" value={this.state.title} onChange={this.handleInputChange} className="form-control" required />
          </div>
          <div className="form-group">
            <label>Description:</label>
            <textarea name="description" value={this.state.description} onChange={this.handleInputChange} className="form-control" required />
          </div>
          <div className="form-group">
            <label>Assignee ID:</label>
            <select name="assignee_id" value={this.state.assignee_id} onChange={this.handleInputChange} className="form-control" required>
              <option value="">Select Assignee</option>
              {users.map(user => (
                <option key={user.id} value={user.id}>{user.name}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Status:</label>
            <select name="status" value={this.state.status} onChange={this.handleInputChange} className="form-control">
              <option value="todo">To Do</option>
              <option value="inprogress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">Add Task</button>
        </form>
      </div>
    );
  }
}

export default TaskForm;
