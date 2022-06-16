import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/indexReducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const store= configureStore({reducer: rootReducer}, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>  
      <App/>
    </Provider>
    
  </React.StrictMode>,
  
  document.getElementById('root')
)



