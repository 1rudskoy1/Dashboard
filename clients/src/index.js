import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import '../node_modules/font-awesome5/css/fontawesome-all.min.css';
import store from "./redux/store.js"
import { Provider } from 'react-redux';
// import '../node_modules/font-awesome/css/font-awesome.min.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
        <App />
      </React.StrictMode>
  </Provider>
);

