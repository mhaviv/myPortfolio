import React, { Component } from 'react';
import Header from './components/Header';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Home from './components/Home';


class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <div className="spacer">
          &nbsp;
        </div>
        <Home />
        <Skills />
        <Portfolio />
        <Contact />
      </div>
    )
  }
}

export default App;
