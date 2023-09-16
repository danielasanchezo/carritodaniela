import './App.css'
import { Routes, Route} from 'react-router-dom'
import { Home } from './components/Layouts/Home/Home.jsx'
import { Notfound } from './components/Notfound/Notfound.jsx'
import { Contact } from "./components/Contact/Contact.jsx";
import { Project } from "./components/Project/Project.jsx";
import { Tienda } from './components/Tienda/Tienda';




function App() {
 

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/Project" element={<Project/>}/>
      <Route path="/Tienda" element={<Tienda/>}/>
      <Route path="*" element={<Notfound/>}/>
    </Routes>
    </>
  )
}

export default App
