import React, { useState } from 'react';
import { useTodoContext } from './TodoContext';

import { Container, Input, Button, TaskList, TaskItem, TotalTasks, Filters, FilterButton, SearchInput } from './TodoApp.styles';

function TodoApp() {
  const { tasks, addTask, completeTask, removeTask, editTask } = useTodoContext();
  const [inputValue, setInputValue] = useState('');
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const handleAddTask = () => {
    addTask(inputValue);
    setInputValue('');
  };

  const handleCompleteTask = (taskId) => {
    completeTask(taskId);
  };

  const handleRemoveTask = (taskId) => {
    removeTask(taskId);
  };

  const handleEditTask = (taskId, newText) => {
    editTask(taskId, newText);
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') {
      return task.completed;
    } else if (filter === 'incomplete') {
      return !task.completed;
    } else {
      return true;
    }
  }).filter(task => task.text.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <Container>
      <h1>To-Do List</h1>
      <Input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter task..."
      />
      <Button onClick={handleAddTask}>Add Task</Button>
      <Filters>
        <FilterButton onClick={() => handleFilterChange('all')}>All</FilterButton>
        <FilterButton onClick={() => handleFilterChange('completed')}>Completed</FilterButton>
        <FilterButton onClick={() => handleFilterChange('incomplete')}>Incomplete</FilterButton>
      </Filters>
      <SearchInput
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search tasks..."
      />
      <TaskList>
        {filteredTasks.map(task => (
          <TaskItem key={task.id} completed={task.completed}>
            <span>{task.text}</span>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleCompleteTask(task.id)}
            />
            <button onClick={() => handleEditTask(task.id, prompt('Enter new task text', task.text))}>Edit</button>
            <button onClick={() => handleRemoveTask(task.id)}>Remove</button>
          </TaskItem>
        ))}
      </TaskList>
      <TotalTasks>Total tasks remaining: {tasks.filter(task => !task.completed).length}</TotalTasks>
    </Container>
  );
}

export default TodoApp;

