import { useState } from 'react'
import { Route, Routes, BrowserRouter} from 'react-router-dom';
import AdminDashboard from './screens/AdminDashboard';
import  ComplaintForm  from './screens/ComplaintForm';

import './App.css'

function App() {
  

  return (
    <BrowserRouter >
      <Routes>
        <Route path = '/submit' element={<ComplaintForm/>}></Route>
        <Route path = '/admin' element={<AdminDashboard/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
