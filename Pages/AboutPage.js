import React from 'react';
import './../App.css';
import {Header,Menu,Footer} from '../components/index';

class AboutPage extends React.Component {
  render(){
  return (
    <div className="App">
      <Header />
      <Menu/>
      <h3>DISCLAIMER</h3>
      <p>This is a project for WebDev discipline work #9, not a real shop. Thanks for reading!</p>
      <Footer/>
    </div>
  );
  }
}

export default AboutPage;