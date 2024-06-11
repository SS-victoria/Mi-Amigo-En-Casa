import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/Login/LoginPage'
import HomePage from './pages/Home/HomePage'
import AddPetPage from './pages/AdicionarMascota/AddPetPage'
import ConsultPetPage from './pages/ConsultarMascota/ConsultPetPage'
import EditPetPage from './pages/editarMascotaPage/EditPetPage'

export default function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<LoginPage/>} />
      <Route path='/home' element={<HomePage/>} />
      <Route path='/addpet' element={<AddPetPage/>} />
      <Route path='/consultpet' element={<ConsultPetPage/>} />
      <Route path='/editpet' element={<EditPetPage/>} />
    </Routes>
    </>
  )
}
