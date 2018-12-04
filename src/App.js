import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ContactForm from './components/contactForm';
import CountryForm from './components/countryForm';

class App extends Component {

  submit = values => {
    // print the form values to the console
    console.log(values)
  }

  render() {
    return (
      <div className="App">
        <ContactForm onSubmit={this.submit} />
        <CountryForm onSubmit={this.submit} />
      </div>
    );
  }
}

export default App;
