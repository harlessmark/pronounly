import React from 'react';
import Pronounly from './components/Pronounly';
import Pronoun from './components/Pronoun';
import Example from './components/Example';
import AllPronouns from './components/AllPronouns';
import WhyIsThisImportant from './components/WhyIsThisImportant';
import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Pronounly />
      <Pronoun />
      <Example />
      <AllPronouns />
      <WhyIsThisImportant />
      <Footer />
    </div>
  );
}

export default App;
