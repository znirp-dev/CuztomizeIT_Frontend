import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import SignUp from './components/SignUp'
import Login from './components/Login'
import Home from './components/Home'
import ForgotPassword from './components/ForgotPassword'
import ResetPass from './components/ResetPass'
import Header from './navigation/Header'
import About from './components/About'
import Shop from './components/Shop'
import Footer from './navigation/Footer'


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path = "/" element ={<Home />}></Route>
        <Route path = "/about" element ={<About />}></Route>
        <Route path = "/shop" element ={<Shop />}></Route>
        <Route path = "/signup" element ={<SignUp />}></Route>
        <Route path = "/login" element ={<Login />}></Route>
        <Route path = "/forgotpassword" element ={<ForgotPassword />}></Route>
        <Route path = "/resetPassword/:token" element ={<ResetPass />}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App