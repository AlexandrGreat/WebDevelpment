import React from 'react';
import './App.css';
import {Body,Header,Menu,Footer} from './components/index';

class App extends React.Component {
  state={
    productList:['Glock 19','Colt 1911','Desert Eagle','Thompson 1928','M 16','Galil','Tec 9']
  }
  render(){
  return (
    <div className="App">
      <Header />
      <Menu/>
      <Body poductList={this.state.productList}/>
      <Footer/>
    </div>
  );
  }
}

export default App;