import { Routes, Route } from 'react-router-dom'
import Home from './componant/Home'
import SignUp from './componant/SignUp'
import Login from './componant/Login';
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        </Routes>
    </>
  )
}

export default App
