import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import TodoListContainer from './containers/TodoListContainer';
import Login from './containers/Login';

const App = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Login} />
      <Route exact path="/todos" component={TodoListContainer} />
    </BrowserRouter>
  );
};

export default App;
