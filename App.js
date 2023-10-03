import React from 'react';
import './App.css';
import {Body,Header,Menu,Footer} from './components/index';

class App extends React.Component {
  state={
    productList:[{id:1,title:'Glock 19',description:'Austria, 9mm, 15 ammo'},
    {id:2,title:'Desert Eagle',description:'Israel, .50AE, 7 ammo'}]
  }
  render(){
  return (
    <div className="App">
      <Header />
      <Menu/>
      <Body productList={this.state.productList}/>
      <Footer/>
    </div>
  );
  }
}

export default App;