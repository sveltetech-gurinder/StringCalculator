import React from 'react';   
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';  
import LoginPage from './Components/LoginPage';
import SignupPage from './Components/SignupPage';
import Profile from './Components/Dashboard';
function App() {  
  return (  
    <>
    <Router>
      <Switch>
      <Route exact path="/" component={LoginPage} />
      <Route exact path="/signup" component={SignupPage}/>
      <Route exact path="/profile" component={Profile}/>
      </Switch>
    </Router>
    </>
  );  
}  
export default App;