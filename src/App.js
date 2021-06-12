import "./App.css"
import Header from './Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Sections from './Sections'
import Section from './Section'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react'



const App = () => {
  const [sections, setSections] = useState([])

  useEffect(() => {
    const getSections = async () => {
      const sectionsFromServer = await fetchSections()
      setSections(sectionsFromServer)
    }

    getSections()
  }, [])

  const fetchSections = async () => {
    const res = await fetch('http://localhost:8080/boards')
    const data = await res.json()
    return data
  }

  return (
    <Router>
      <div className="App">
        <Header />
        <Route path="/" exact>
          
          <Sections sections={sections} />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </div>
    </Router>

  );
}

export default App;
