// 1) para iniciar una nueva app:
// npx create-react-app "nombre de mi app" 

// 2) para empezar a correr la app poner:
// cd ¨nombre de mi app¨
// npm start 

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//componente de partida
import App from './App';
// import reportWebVitals from './reportWebVitals';

//pasamos 2 params, el componente y donde se renderiza
ReactDOM.render(
  // <React.StrictMode>
  <App />,
  // {/* </React.StrictMode>, */}
  document.getElementById('root')
);

// reportWebVitals();
