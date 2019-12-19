import React from 'react';
import './App.css';
import Nav from './Nav';
import Users from './Users';
import UserDetail from './UserDetail'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App"> 
      <Nav />
        <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/users' exact component={Users} />
        <Route path='/shop/:name' component={UserDetail}/>
        </Switch>
    </div>
    </Router>
  );
}


const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);

export default App;