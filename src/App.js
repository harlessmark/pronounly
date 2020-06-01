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
import Footer from './components/Footer';

// todo: custom url, https, favicon, readme
// todo: separate app for Analytics

function App() {
  useEffect(() => {
    ReactGa.initialize('UA-161395427-1');
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

        <Route exact path='/he'>
          <Pronoun pronoun='he' />
          <Example pronoun='he' />
          <Importance />
          <Share />
        </Route>

        <Route exact path='/she'>
          <Pronoun pronoun='she' />
          <Example pronoun='she' />
          <Importance />
          <Share />
        </Route>

        <Route exact path='/they'>
          <Pronoun pronoun='they' />
          <Example pronoun='they' />
          <Importance />
          <Share />
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
