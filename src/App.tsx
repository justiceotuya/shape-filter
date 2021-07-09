import React from 'react';
import { Home, Login } from './pages';
import {GlobalStyle} from './styles/index'
import { AuthProvider } from './context/auth';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
 <AuthProvider>
   <GlobalStyle/>
       <Router>
        <Switch>

          <Route
            path="/login"
            component={Login}
            />
          <Route
            exact
            path="/"
            component={Home}
          />
        </Switch>
       </Router>

  </AuthProvider>
      );
}

export default App;
