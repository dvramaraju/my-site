import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Toggle from './Toggle';

function tick() {
  const element = (
    <div className='dark-mode'>
      <div style={{ display:'flex', backgroundColor: 'rgba(170, 50, 220, .6)', fontSize: 30, textAlign: "center", justifyContent:'space-between' }}>
        <h2>Time: {new Date().toLocaleTimeString()}, Date: {new Date().toLocaleDateString()}</h2>
        <div>
          <Toggle />&nbsp;
        </div>
      </div>
      <App />
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);