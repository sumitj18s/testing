import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import { Provider } from 'react-redux'
import store from "./store";
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <ThemeProvider>
    <Provider store={store}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <BrowserRouter> 
        <App />
      </BrowserRouter>
    </Provider>
  </ThemeProvider>,
  document.querySelector('#root'),
);
