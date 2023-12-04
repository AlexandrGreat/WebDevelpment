import React from 'react';
import './../App.css';
import {Body,Header,Menu,Footer,CallbackForm} from '../components/index';

class LogInPage extends React.Component {
  render(){
  return (
    <div className="App">
      <Header />
      <Menu/>
      <CallbackForm/>
      <Footer/>
    </div>
  );
  }
}

export default LogInPage;