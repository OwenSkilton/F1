import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./Pages/home/Home";
import "./index.scss"

export default function App(){
  return(
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/standings" element={<Home/>}/>
          <Route path="/drivers" element={<Home/>}/>
          <Route path="/race-results" element={<Home/>}/>
          <Route path="/schedule" element={<Home/>}/>
          <Route path="/circuits" element={<Home/>}/>
          <Route path="/constructors" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}