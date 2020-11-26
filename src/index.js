import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

function tick() {
  const element = (
    <div className='dark-mode'>
      <h2 style={{ backgroundColor: 'green', fontSize: 30, textAlign: "center" }}>Date: {new Date().toLocaleTimeString()}, Date: {new Date().toLocaleDateString()}</h2>
      <App />
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);