import React from 'react';
import 'normalize.css';
import './App.css';
import Pronounly from './components/Pronounly';
import Pronoun from './components/Pronoun';
import Example from './components/Example';
import AllPronouns from './components/AllPronouns';
import Importance from './components/Importance';
import Share from './components/Share';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Pronounly />
      <Pronoun />
      <Example />
      <Importance />
      <Share />
      <Footer />
      {/* <AllPronouns />
       */}
    </div>
  );
}

export default App;
