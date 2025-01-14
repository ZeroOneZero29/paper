import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './element/Header.jsx';
import Quote from './element/Quote.jsx';
import Weather from './element/Weather.jsx';
import News from './element/News.jsx';
import Container from './element/Container.jsx';
import App from './element/App.jsx';
import './fonts/fontslink.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

   
    <div className='container'>
     <App>
      
     </App>
  

    </div>





);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
