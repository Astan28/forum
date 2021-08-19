import "./App.css"
import Header from './Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Sections from './Sections'
import Section from './Section'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react'
import { Provider } from "react-redux";

import store from './redux/store'


const App = () => {
  // const [sections, setSections] = useState([])

  // useEffect(() => {
  //   const getSections = async () => {
  //     const sectionsFromServer = await fetchSections()
  //     setSections(sectionsFromServer)
  //   }

  //   getSections()
  // }, [])

  // const fetchSections = async () => {
  //   const res = await fetch('https://forum-application-1.herokuapp.com/boards')
  //   const data = await res.json()
  //   return data
  // }

  return (
    <Provider store={ store }>
    <Router>
      <div className="App">
        <Header />
        <Route path="/" exact>
          
          <Sections sections={store.sections} />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </div>
    </Router>
  </Provider>
  );
}

export default App;
