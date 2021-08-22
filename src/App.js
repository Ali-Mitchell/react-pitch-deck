import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Hero from './Pages/hero.jsx';
import Nav from './components/Nav/Nav.jsx'
import Features from './components/Features/Features.jsx'
import Footer from './components/Footer/Footer.jsx';
// import Nav from './components/Nav';


// import './App.css';


function App() {

  return (
    <div>
      <main>
        <Router>
          <Nav/>
          <Switch>
            <Route exact path='/' component={Hero} />
            <Route exact path='/features' component={Features} />

          </Switch>
          <Footer/>
        </Router>
      </main>
    </div>
  );
}


export default App;
