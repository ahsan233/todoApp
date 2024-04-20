import React, { createContext, useState, useContext, useEffect } from 'react';

const TodoContext = createContext();

export function useTodoContext() {
  return useContext(TodoContext);
}

export function TodoProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (taskText) => {
    if (taskText.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: taskText, completed: false }]);
    }
  };

  const completeTask = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const editTask = (taskId, newText) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, text: newText } : task
    ));
  };

  return (
    <TodoContext.Provider value={{ tasks, addTask, completeTask, removeTask, editTask }}>
      {children}
    </TodoContext.Provider>
  );
}
