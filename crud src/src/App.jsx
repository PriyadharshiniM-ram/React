import React from 'react'
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import EmpListing from './components/EmpListing'
import EmpCreate from './components/EmpCreate'
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import EmpEdit from './components/EmpEdit';
import EmpDetails from './components/EmpDetails';
const App = () => {
  return (
    <div className='mainBlock'>
      <h1>React Js CRUD Opeation</h1>
      <Router>
        <ToastContainer/>
        <Routes>
            <Route path='/' element={<EmpListing/>}/>
            <Route path='/employee/create' element={<EmpCreate/>}/>
        <Route path='/employee/edit/:empid' element={<EmpEdit/>}/>
        <Route path='/employee/details/:empid' element={<EmpDetails/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
