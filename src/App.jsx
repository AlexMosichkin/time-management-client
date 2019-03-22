import { library } from '@fortawesome/fontawesome-svg-core';
import { faQuestion, faColumns } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import SideBar from './components/sideBar/sideBar.jsx';
import './App.scss';

library.add(faQuestion, faColumns);

const App = () => (
  <div className="App">
    <SideBar />
  </div>
);

export default App;
