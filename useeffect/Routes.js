import React from 'react'
import{Routes,Route} from "react-router-dom"
import Formapp from '../form'
import Axiosdata from './axios'
import Home from './home'
import Navbar from './navlink'
const  Aroutes=()=> {
  return (<div>
    <Routes>
        <Route path='/' element={ <Home />} />
        <Route path="/form" element={<Formapp />} />
        <Route path='/axios' element={<Axiosdata />} />
    </Routes>
    <Navbar />
  </div>)
}

export default Aroutes;