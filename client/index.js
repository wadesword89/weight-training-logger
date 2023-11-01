// import React from 'react';
// import { ReactDOM } from 'react';{ render } from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
// // import App from './App';

// render(
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>,
//     document.getElementById('app'),
//   );

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// function App() {
//   return (
//     <h1>TEST</h1>
//   )
// }
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />)