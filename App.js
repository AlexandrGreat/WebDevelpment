import React from 'react';
import styles from './App.module.css'
import {} from 'antd';
import { ApplicationContent,ApplicationFooter,ApplicationHeader } from './Components';
import { BrowserRouter } from 'react-router-dom';

function App(){
  return(
    <div className={styles.App}>
      <BrowserRouter>
        <ApplicationHeader />
        <ApplicationContent />
        <ApplicationFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;