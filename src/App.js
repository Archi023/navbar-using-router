import React from "react";
import { Routes,Route } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Menu from "./Menu";
import './index';

const App = () =>{
  return (
    <>
    <Menu/>  
    <Routes>
    <Route  exact path="/"  Component={Contact} />
    <Route  path='/about'  Component={About} />
    </Routes>
   </>
  );
}

export default App;
