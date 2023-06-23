import React from "react";
import { Footer, Header } from './containers'
import MainLayout from "./layout/MainLayout"
import './styles/_main.sass'

const App = () => {
  return (
    <MainLayout>
      <Header/>
      <Footer/>
    </MainLayout>
  )
}

export default App