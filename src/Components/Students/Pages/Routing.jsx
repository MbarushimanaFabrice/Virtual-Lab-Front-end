import React from 'react'
import { Route,Routes } from 'react-router-dom';
import Features from './Features';
import Laboratory from './Laboratory';
import Schoolmate from './Schoolmate';
import Ai from './Ai'
import Learning from './Learning';
import Profile from './Profile';
import Books from './Books';
import ChemS1 from './books/ChemS1';

function Routing() {
  return (
     <>
     <Routes>
        <Route path='/' element={<Features/>}/>
        <Route path='/Laboratory' element={<Laboratory/>}/>
        <Route path='/schoolmate' element={<Schoolmate/>}/>
        <Route path='/Ai' element={<Ai/>}/>
        <Route path='/Learning' element={<Learning/>}/>
        <Route path='/Profile' element={<Profile/>}/>
        <Route path='/Books' element={<Books/>}/>

        {/* books */}
        <Route path='/ChemS1' element={<ChemS1/>}/>

      </Routes>
     </>
  )
}
export default Routing