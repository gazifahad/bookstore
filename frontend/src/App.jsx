import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { CreateBooks } from './pages/CreateBooks'
import ShowBooks from './pages/ShowBooks'
import { DeleteBooks } from './pages/DeleteBooks'
import { EditBooks } from './pages/EditBooks'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}>

      </Route>
      <Route path='/books/create' element={<CreateBooks />}>

      </Route>
      <Route path='/books/details/:id' element={<ShowBooks />}>

      </Route>
      <Route path='/books/delete/:id' element={<DeleteBooks />}>

      </Route>
      <Route path='/books/edit/:id' element={ <EditBooks />}>

      </Route>
    </Routes>
  )
}

export default App