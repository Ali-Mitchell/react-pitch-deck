import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Hero from './Pages/hero.jsx';
import Nav from './components/Nav/Nav.jsx'
import Features from './components/Features/Features.jsx'
import Footer from './components/Footer/Footer.jsx';
// import Nav from './components/Nav';


// import './App.css';

function App() {

  const [Features] = useState([


    {
      name: "EXPLORE"
    },
    {
      name:"CREATE"
    },
    {
      name:"DASHBOARD"
    },

  ])

  const [currentFeature, setCurrentFeature] = useState(Features[0]);


  return (
    <div>
      <main>
        <Router>
          <Nav></Nav>
          <Switch>
            <Route exact path='/' component={Hero} />
            <Route exact path='/features' component={Features} currentFeature={currentFeatures}>
              {/* Features={Features}
            setCurrentFeature={setCurrentFeature}
            currentFeature={currentFeature} */}
            </Route>

          </Switch>
          <Footer></Footer>
        </Router>
      </main>
    </div>
  );
}


export default App;
