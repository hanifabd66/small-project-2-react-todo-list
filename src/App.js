import React from "react";
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom"
import "./App.css";
import TodoListPage from "./Pages/TodoList";
import Header from './Pages/Header'


class App extends React.Component {
  render() {
    return (
            <div className="app">
            <Router>
            <Header/>
            </Router>
            {/* <TodoListPage /> */}
      </div>
    );
  }
}


export default App;