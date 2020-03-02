import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainComponent from './components/Main';
import SidebarController from './context';

function App() {
  return (
    <div className="App">
      <SidebarController>
        <MainComponent />
      </SidebarController>
    </div>
  );
}

export default App;
