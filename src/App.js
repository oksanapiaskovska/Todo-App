import React from 'react';
import './styles/test.scss';
import { Route, BrowserRouter } from 'react-router-dom';
import TodoListContainer from './components/TodoListContainer';
import Login from './components/Login';

const App = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Login} />
      <Route exact path="/todos" component={TodoListContainer} />
    </BrowserRouter>
  );
};

export default App;
