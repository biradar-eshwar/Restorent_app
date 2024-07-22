import React from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './../Navbar/Navbar'
import Home from "../Home/Home"
import Menu from "../Menu/Menu"
import About from "../About/About"
import Contact from "../Contact/Contact"
import Breakefast from '../Subpage/Breakefast'
import Drinks from "../Subpage/Drinks"
import Lunch from '../Subpage/Lunch'
import Wine from '../Subpage/Wine'
const Router1 = () => {
  return (
    <div>
      <Router> 
        <Navbar/>
        <Routes>
            <Route path='/' element= {<Home/>}/>
            <Route path='/menu' element={<Menu/>}> 
            <Route   path='breakefast' element={<Breakefast/>}/>
            <Route index  element={<Breakefast/>}/>
            <Route path='Lunch' element={<Lunch/>}/>
            <Route path='Drinks' element={<Drinks/>}/>
            <Route path='Wine' element={<Wine/>}/>
</Route>
            <Route path='/About' element={<About/>}/>
            <Route path='/Contact' element={<Contact/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default Router1
