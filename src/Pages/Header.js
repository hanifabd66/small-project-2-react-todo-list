import React from "react"
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom"
import Home from './Home';
import Profile from './Profile';
import TodoListPage from "./TodoList";

function Header (){
    return(  
        <>
        <div className="header-wrap">
       <ul className="nav-menu">
       <li className="nav-menu-item">
           <NavLink className="mantap" exact to="/">To do List Page</NavLink> 
           </li>
           <li className="nav-menu-item">
           <NavLink className="mantap" to="/home">Home</NavLink> 
           </li>
           <li className="nav-menu-item">
           <NavLink className="mantap" to="/profile">Profile</NavLink> 
           </li>
   </ul>
</div>
    
    <Route path="/" exact component={TodoListPage}/>
    <Route path="/home" exact component={Home}/>
    <Route path="/profile" component={Profile}/>
    <Route path="/profile/:id" component={Profile} />
        
    {/* <Route path="/counter" component={Counter}/> */}
</>
        );
}

export default Header;