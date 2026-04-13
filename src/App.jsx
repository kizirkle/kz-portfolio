import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Nav from './components/nav.jsx'
import Home from './components/home.jsx'
import Works from './components/works.jsx'
import Resume from './components/resume.jsx'  

function App() {

  return (
    <>
      <Nav/>
      <div>
        <Home/>
        <Works/>
        <Resume/>
      </div>
    </>
  )
}

export default App
