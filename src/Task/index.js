import React, { Component } from 'react';

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: this.props.task.status
    };
  }

  handleStatusChange = (newStatus) => {
    this.setState({ status: newStatus });
    this.props.onStatusChange(this.props.task.id, newStatus);
  };

  render() {
    const { title, description, assignee_id, created_at, updated_at } = this.props.task;
    const { status } = this.state;

    let statusColor;
    switch (status) {
      case 'todo':
        statusColor = 'red';
        break;
      case 'inprogress':
        statusColor = 'yellow';
        break;
      case 'completed':
        statusColor = 'green';
        break;
      default:
        statusColor = 'grey';
        break;
    }

    return (
      <div style={{ border: `3px solid ${statusColor}`, padding: '10px', marginBottom: '10px' }}>
        <h3>Task Name : {title}</h3>
        <p><b>Description:</b> {description}</p>
        <p><b>Assignee ID:</b> {assignee_id}</p>
        <p><b>Status:</b> {status}</p>
        <p><b>Created At:</b> {created_at}</p>
        <p><b>Updated At:</b> {updated_at}</p>

        <div>
          <button onClick={() => this.handleStatusChange('todo')} style={{border: '2px solid red',margin:'5px'}}>To Do</button>
          <button onClick={() => this.handleStatusChange('inprogress')} style={{border: '2px solid yellow',margin:'5px'}}>In Progress</button>
          <button onClick={() => this.handleStatusChange('completed')} style={{border: '2px solid green',margin:'5px'}}>Completed</button>
        </div>
      </div>
    );
  }
}

export default Task;
