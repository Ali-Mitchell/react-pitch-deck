import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Hero from './Pages/hero.jsx';
import Nav from './components/Nav/Nav.jsx'
import Features from './components/Features/Features.jsx'
import Footer from './components/Footer/Footer.jsx';
import Invest from './components/Invest/Invest';
import Contact from './components/Contact/Contact';
import Team from './components/Team/Team';
// import Create from './components/Create/Create.jsx';
// import Explore from './components/Explore/Explore';
// import Dashboard from './components/Dashboard/Dashboard';

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
            <Route exact path='/features' component={Features}/>
            {/* <Route exact path='/create' component={Create}/>
            <Route exact path='/explore' component={Explore}/>
            <Route exact path='/dashboard' component={Dashboard}/> */}
            <Route exact path='/invest' component={Invest}/>
            <Route exact path='/contact' component={Contact}/>

          </Switch>
          <Team></Team>
          <Footer/>
        </Router>
      </main>
    </div>
  );
}


export default App;
