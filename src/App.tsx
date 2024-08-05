import React from 'react';
import 'antd/dist/reset.css';
import './App.css';
import Upperheader from './Upperheader';
import Header from './Header';

const App: React.FC = () => {
  return (
    <div className="App">
      <Upperheader />
      <Header />
    </div>
  );
};

export default App;
