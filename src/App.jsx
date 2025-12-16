import Navbar from './components/Navbar/Navbar'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Project from './components/Projects/Project.jsx'
function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/project' element={<Project/>}></Route>
    </Routes>

    </>
  )
}

export default App
