import React from 'react';
import './../App.css';
import {Body,Header,Menu,Footer} from '../components/index';
import { ProductDataContext } from '../contexts/ProductDataContext';
import { SomeDataContext } from '../contexts/SomeDataContext';

class App extends React.Component {
  render(){
  return (
    <div className="App">
      <Header />
      <Menu/>
      <ProductDataContext.Consumer>
        {(productData)=>(
          <SomeDataContext.Consumer>
            {(topicText)=>(
            <Body productList={productData} topicText={topicText}/>
          )}    
          </SomeDataContext.Consumer>
        )}
      </ProductDataContext.Consumer>
      <Footer/>
    </div>
  );
  }
}

export default App;