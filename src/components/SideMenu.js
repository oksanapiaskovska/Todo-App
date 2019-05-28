import React from 'react';
import './SideMenu.scss';

const renderSideMenuItem = (iconClass, itemText) => {
  return (
    <div className="sidemenu-item-wrp">
      <i className={iconClass}></i>
      {itemText}
    </div>
  );
};

const renderSideMenuTodoItem = toDoName => {
  return (
    <div className="side-menu-todo-list">
      <i className="far fa-circle"></i>
      <p>{toDoName}</p>
      <i className="options fas fa-ellipsis-v"></i>
    </div>
  );
};


const SideMenu = () => {
  return (
    <div className="side-menu-wrp">
      <div className="side-menu-items">
        {renderSideMenuItem('fas fa-list-ul', 'All Tasks')}
        {renderSideMenuItem('fas fa-check-circle', 'Complited Tasks')}
        {renderSideMenuItem('far fa-check-circle', 'Incomplited Tasks')}
      </div>
      <div className="side-menu-separation-line"></div>
      {/* Place for todos names */}
      <div className="side-menu-items">
        {renderSideMenuTodoItem('React Project')}
        {renderSideMenuTodoItem('React Project overflow333333')}
      </div>
      <div className="side-menu-separation-line"></div>
      <div className="side-menu-items">
        {renderSideMenuItem('fas fa-plus-circle', 'Create new list')}
      </div>
    </div>
  );
};

export default SideMenu;
