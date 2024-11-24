import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Testimonails from './components/Testimonails'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
const App = () => {
  return (
    <div className='w-full overflow-hidden bg-gray-950'>
      <ToastContainer/>

      <Header/>

      <About />
      <Projects />
      <Testimonails/>
      <Contact />
      <Footer />
    </div>
  )
}

export default App