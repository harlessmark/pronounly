import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReactGa from 'react-ga';
import 'normalize.css';
import './App.css';
import Pronounly from './components/Pronounly';
import About from './components/About';
import Pronoun from './components/Pronoun';
import Example from './components/Example';
import Importance from './components/Importance';
import Share from './components/Share';
import Contribute from './components/Contribute';
import Footer from './components/Footer';
import HelicopterSound from './components/HelicopterSound';

function App() {
  useEffect(() => {
    // Google Analytics
    ReactGa.initialize('UA-161395427-2');
    ReactGa.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <Router>
      <Pronounly />
      <Switch>
        <Route exact path='/'>
          <About />
          <Importance />
          <Share />
        </Route>

        {['/he', '/she', '/they', '/er', '/sie', '/xier'].map(path => {
          const pronoun = path.substring(1);
          return (<Route exact path={path}>
          <Pronoun pronoun={pronoun} />
          <Example pronoun={pronoun} />
          <Importance />
          <Share />
        </Route>)
        })}

        <Route exact path='/attack-helicopter'>
          <Pronoun pronoun='attack-helicopter' />
          <br />
          <HelicopterSound />
          <Example pronoun='attack-helicopter' />
        </Route>

        <Route path='*'>
          {/* 404 */}
          <Contribute />
          <Importance />
          <Share />
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
