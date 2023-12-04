import React from 'react';
import './../App.css';
import {Body,Header,Menu,Footer,ProductForm} from '../components/index';

class ProductPage extends React.Component {
  render(){
  return (
    <div className="App">
      <Header />
      <Menu/>
      <ProductForm/>
      <Footer/>
    </div>
  );
  }
}

export default ProductPage;