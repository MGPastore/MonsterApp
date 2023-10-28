import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


function Home() {
  return (
    <div>
      <h2>Home Page</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About Page</h2>
    </div>
  );
}

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
