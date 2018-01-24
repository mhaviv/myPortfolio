import React, { Component } from 'react';
import Header from './components/Header';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import About from './components/About';

class App extends Component {
  render() {
    return (
    	<div>
	    	<Header />
	    	<About />
	    	<Skills />
	    	<Portfolio />
	    	<Contact />
    	</div>
    )
  }
}

export default App;
