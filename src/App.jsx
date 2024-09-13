import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Add Multi-Language Support',
      status: 'Todo',
      assignee: 'AS',
      type: 'Feature Request',
    },
    {
      id: 2,
      title: 'Implement Email Notification System',
      status: 'Todo',
      assignee: 'AS',
      type: 'Feature Request',
    },
    {
      id: 3,
      title: 'Optimize Database Queries for Performance',
      status: 'In Progress',
      assignee: 'MG',
      type: 'Feature Request',
    },
    {
      id: 4,
      title: 'Enhance Search Functionality',
      status: 'Done',
      assignee: 'MG',
      type: 'Feature Request',
    },
    {
      id: 5,
      title: 'Integrate Third-Party Payment Gateway',
      status: 'Done',
      assignee: 'AS',
      type: 'Feature Request',
    },
    {
      id: 6,
      title: 'Update User Profile Page UI',
      status: 'Todo',
      assignee: 'AS',
      type: 'Feature Request',
    },
    {
      id: 7,
      title: 'Conduct Security Vulnerability Assessment',
      status: 'Done',
      assignee: 'AS',
      type: 'Feature Request',
    },
    {
      id: 8,
      title: 'Upgrade Server Infrastructure',
      status: 'Done',
      assignee: 'AS',
      type: 'Feature Request',
    },
    {
      id: 9,
      title: 'Implement Role-Based Access Control (RBAC)',
      status: 'Done',
      assignee: 'NG',
      type: 'Feature Request',
    },
    {
      id: 10,
      title: 'Add Multi-Language Support - Enable multi-language support within the...',
      status: 'Todo',
      assignee: 'AS',
      type: 'Feature Request',
    },
    {
      id: 11,
      title: 'Create Onboarding Tutorial for New Users',
      status: 'Todo',
      assignee: 'AS',
      type: 'Feature Request',
    },
  ]);

  const [selectedStatus, setSelectedStatus] = useState('All');

  const filteredTasks = selectedStatus === 'All'
    ? tasks
    : tasks.filter(task => task.status === selectedStatus);

  const handleStatusChange = (event) => {
    setSelectedStatus(event.target.value);
  };

  return (
    <div className="container">
      <h1>Task Management</h1>
      <div className="filter-container">
        <select value={selectedStatus} onChange={handleStatusChange}>
          <option value="All">All</option>
          <option value="Todo">Todo</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
          <option value="Canceled">Canceled</option>
        </select>
      </div>
      <div className="board">
        <div className="column">
          <h2>Todo</h2>
          {filteredTasks.filter(task => task.status === 'Todo').map(task => (
            <div key={task.id} className="task">
              <div className="task-header">
                <h3>CAM-{task.id}</h3>
                <div className="assignee">
                  {task.assignee && (
                    <span className="assignee-avatar">{task.assignee}</span>
                  )}
                </div>
              </div>
              <p className="task-title">{task.title}</p>
              <span className="task-type">{task.type}</span>
            </div>
          ))}
        </div>
        <div className="column">
          <h2>In Progress</h2>
          {filteredTasks.filter(task => task.status === 'In Progress').map(task => (
            <div key={task.id} className="task">
              <div className="task-header">
                <h3>CAM-{task.id}</h3>
                <div className="assignee">
                  {task.assignee && (
                    <span className="assignee-avatar">{task.assignee}</span>
                  )}
                </div>
              </div>
              <p className="task-title">{task.title}</p>
              <span className="task-type">{task.type}</span>
            </div>
          ))}
        </div>
        <div className="column">
          <h2>Done</h2>
          {filteredTasks.filter(task => task.status === 'Done').map(task => (
            <div key={task.id} className="task">
              <div className="task-header">
                <h3>CAM-{task.id}</h3>
                <div className="assignee">
                  {task.assignee && (
                    <span className="assignee-avatar">{task.assignee}</span>
                  )}
                </div>
              </div>
              <p className="task-title">{task.title}</p>
              <span className="task-type">{task.type}</span>
            </div>
          ))}
        </div>
        <div className="column">
          <h2>Canceled</h2>
          {filteredTasks.filter(task => task.status === 'Canceled').map(task => (
            <div key={task.id} className="task">
              <div className="task-header">
                <h3>CAM-{task.id}</h3>
                <div className="assignee">
                  {task.assignee && (
                    <span className="assignee-avatar">{task.assignee}</span>
                  )}
                </div>
              </div>
              <p className="task-title">{task.title}</p>
              <span className="task-type">{task.type}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;