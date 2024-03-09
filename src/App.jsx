import './App.css'
import Home from './Home'
import Navbar from './Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './Signup'
import Login from './Login'

function App() {

  return (
    <>
    <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
