import { Routes, Route } from 'react-router-dom'
import { Container} from 'react-bootstrap'
import { Home } from './pages/Home'
import { SignUp } from './pages/SignUp'
import { Login } from './pages/Login'
import { Navbar } from './components/Navbar'

function App() {
  return (
    <>
      <Navbar/>
      <Container className='mb-4'>
        <Routes>
          <Route path='/' element={<Home />} /> 
          <Route path='/sign_up' element={<SignUp />} /> 
          <Route path='/login' element={<Login />} /> 
        </Routes>
      </Container>
    </>
  )
}

export default App
