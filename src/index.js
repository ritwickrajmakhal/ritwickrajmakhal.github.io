import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import data from './config.json'

// custom js written by ritwickrajmakhal
document.title = data.website.user.name
data.website.user.metaData.forEach((item) => {
  const metaElement = document.createElement("meta");
  metaElement.setAttribute("name", item["name"])
  metaElement.setAttribute("content", item["content"])
  document.head.appendChild(metaElement)
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
