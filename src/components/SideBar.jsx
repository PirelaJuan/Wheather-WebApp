import React from 'react';
import { Link } from "react-router-dom";
import '../App.css';

function SideBar() {
  return (
    <div className='App-sidebar'>
      <div className='Header'>
        <h2>CloudWatch</h2>
      </div>
      <div className='Menu'>
            
        <ul>
       
            <Link to="/" className='menu-link'>
              <i className='fas fa-tachometer-alt'></i>
              <div>🖼️Dashboard</div>
            </Link>
        
          
            <Link to="/" className='menu-link'>
              <i className='fas fa-tachometer-alt'></i>
              <div>🔎Search</div>
            </Link>
          
          
            <Link to="/" className='menu-link'>
              <i className='fas fa-tachometer-alt'></i>
              <div>❔About</div>
            </Link>

        </ul>
          
       
      </div>
    </div>
  );
}

export default SideBar;