import React from 'react'
import { BrowserRouter as Router, Routes, Route } from'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
import ProtectedRouter from './components/ProtectedRouter'

const App = () => {
  return (
    <div className='app'>
      <Router>
        <Routes>
          
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/' element={<ProtectedRouter/>} >
          <Route path='/' element={<Home/>} />
           </Route>

        </Routes>
      </Router>
    </div>
  )
}

export default App