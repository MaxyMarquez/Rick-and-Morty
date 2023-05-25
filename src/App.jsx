import './App.css'
import { useEffect, useState } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Form from './components/Form/Form'
import Wiki from './components/Wiki/Wiki'
import CharacterDetail from './components/Characters/CharacterDetail'
import Home from './components/Home/Home'
import Favorites from './components/Favorites/Favorites'


function App() {

  const [access, setAccess] = useState(false);
  const email = 'admin@admin.com'
  const password = 'admin01'

  const location = useLocation();
  const navigate = useNavigate();

  const login = (userData) => {
    if (userData.email === email && userData.password === password) {
      setAccess(true);
      navigate('/home')
    }
  }

  useEffect(() => {
    !access && navigate('/')
  }, [access])

  return (
    <div>
      {
        location.pathname !== '/' && <NavBar />
      }
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/wiki" element={<Wiki />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path="/detail/:id" element={<CharacterDetail />} />
      </Routes>
    </div>
  )
}

export default App
