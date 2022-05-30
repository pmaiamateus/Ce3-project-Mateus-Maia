import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import RegisterPage from './pages/RegisterPage';
import UpdatePage from './pages/UpdatePage'

function App() {
  return (
    <Switch>
      <Route exact path="/" render={ () => <Redirect to="/cadastrar" /> } />
      <Route exact path="/cadastrar" component={ RegisterPage } />
      <Route exact path="/atualizar" component={ UpdatePage } />
    </Switch>
  );
}

export default App;
