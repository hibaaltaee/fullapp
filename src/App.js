import './App.css';
import Navbar from './component/navbar';
import { BrowserRouter as  Router,Route, Routes} from 'react-router-dom';
import Home from "./pages/home"
import React from 'react';
import About from "./pages/about"
import Menu from './pages/menu';
import Login from './pages/login'
import Reservation from './pages/reservation';
import Footer from './component/footer'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return(
    <div>
      <Router>
      <Navbar/>
     <Routes>
      <Route path="/"element={<Home/>}/>
      <Route path="/about"element={<About/>}/>
      <Route path="/menu"element={<Menu/>}/>
      <Route path="/login"element={<Login/>}/>
      <Route path="/reservation"element={<Reservation/>}/>
     </Routes>
      </Router>

      <Footer/>
    </div>
    
  )
}

export default App;