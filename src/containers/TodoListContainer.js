import React from 'react';
import Header from '../components/Header';
import SideMenu from '../components/SideMenu';
import './TodoListContainer.scss';

const TodoListContainer = () => {

  return (
    <div className="todo-list-container">
      <Header />
      <SideMenu />
      <div style={{ backgroundColor: '#e5e5e5', gridArea: 'main' }} >main</div>
    </div>
  );
};

export default TodoListContainer;
