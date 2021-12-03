import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Greeting from './Greeting';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './style.css';
import Store from '../redux/ConfigureStore';

const App = () => (
  <Provider store={Store}>
    <Router>
      <Routes>
        <Route exact path="/" element={<Greeting />} />
      </Routes>
    </Router>
  </Provider>
);

export default App;
