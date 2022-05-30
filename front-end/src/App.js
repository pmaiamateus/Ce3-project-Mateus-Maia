import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <Switch>
      <Route exact path="/" render={ () => <Redirect to="/cadastrar" /> } />
      <Route exact path="/cadastrar" component={ RegisterPage } />
    </Switch>
  );
}

export default App;
