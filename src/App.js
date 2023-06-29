import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import { AboutMe, Footer } from "./containers";
import { MainPage, NotFound } from "./pages";
import './styles/_main.sass'

const App = () => {
  return (
    <div className='layout-container'>
      <Navbar />
      <Routes>
        <Route path="/" caseSensitive={false} element={<MainPage/>} />
        <Route path="/es" caseSensitive={false} element={<AboutMe/>} />
        <Route path="/home" caseSensitive={false} element={<MainPage/>} />
        <Route path="/projects" caseSensitive={false} element={<MainPage/>} />
        <Route path="/aboutme" caseSensitive={false} element={<MainPage/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App