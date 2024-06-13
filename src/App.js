import React from 'react';
import MaintineTable from './components/Table/MaintineTable.jsx';
import "./App.css";
import logoHacom from "./assets/images/logo-hacom-compressed.jpg"
import { XLg } from 'react-bootstrap-icons';
import SystemSideBar from './components/Sidebar/SystemSidebar.jsx';


function App() {
  return (
    <div className="App">
      <div className='header'>
        <div className='header-logo'>
          <XLg className='icon-close' />
          <a href="#">
            <img src={logoHacom} alt="Hacom" />
          </a>
        </div>
      </div>
      <div className='main'>
        <SystemSideBar />
        <MaintineTable />
      </div>
    </div>
  );
}

export default App;
