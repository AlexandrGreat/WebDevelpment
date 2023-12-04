import React from 'react';
import './../App.css';
import Items from '../components/productForm/Items'
import {Body,Header,Menu,Footer,ProductForm} from '../components/index';

class ProductPage extends React.Component {
  render(){
  return (
    <div className="App">
      <Header />
      <Menu/>
      <Items/>
      <Footer/>
    </div>
  );
  }
}

export default ProductPage;