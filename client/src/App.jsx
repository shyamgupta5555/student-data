import { useState } from 'react'
import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import { From } from './component/form'

function App() {

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<From/>}></Route>
      </Routes>
      </BrowserRouter>
      
    
    </div>
  )
}

export default App
