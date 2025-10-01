import React, { useState } from 'react';
import useLocalStorage from './useLocalStorage'; 
import './style.css';
function AppWord() {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [newTask, setNewTask] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const handleAddTask = () => {
    if (newTask.trim() === '') return;
    setTasks([...tasks, newTask.trim()]);
    setNewTask('');
  };
  const handleDeleteTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };
  // Lọc tasks theo searchTerm 
  const filteredTasks = tasks.filter(task =>
    task.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="app-container">
      <h2>Quản lý công việc</h2>
      {/* Input thêm task */}
      <div className="input-group">
        <input
          type="text"
          placeholder="Nhập công việc..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="task-input"
        />
        <button onClick={handleAddTask} className="btn-add">Thêm</button>
      </div>
      {/* Input tìm kiếm */}
      <div className="input-group" style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Tìm kiếm công việc..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="task-input"
        />
      </div>
      {/* Danh sách công việc đã lọc */}
      <ul className="task-list">
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task, index) => (
            <li key={index} className="task-item">
              <span>{task}</span>
              <button onClick={() => handleDeleteTask(tasks.indexOf(task))} className="btn-delete">Xóa</button>
            </li>
          ))
        ) : (
          <li className="task-item">Không có công việc phù hợp.</li>
        )}
      </ul>
    </div>
  );
}

export default AppWord;
