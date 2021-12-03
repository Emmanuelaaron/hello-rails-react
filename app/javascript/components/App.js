import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Greeting from "./Greeting"
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../components/style.css'
import Store from "../redux/ConfigureStore";

class App extends React.Component {
  render () {
    return (
      <Provider store={Store} >
        <Router>
          <Routes>
            <Route exact path="/" element={ <p>Home Page!!</p> } />
            <Route exact path="/greeting" element={ <Greeting/> } />
          </Routes>
        </Router>
      </Provider>
    );
  }
}

export default App