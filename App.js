import React from 'react';
import './App.css';
import {Body,Header,Menu,Footer} from './components/index';

class App extends React.Component {
  render(){
  return (
    <div className="App">
      <Header />
      <Menu/>
      <Body/>
      <Footer/>
    </div>
  );
  }
}
export const poductList=['Glock 19','Colt 1911','Desert Eagle','Thompson 1928','M 16','Galil','Tec 9'];
export default App;