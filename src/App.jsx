import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import "./index.scss"

export default function App(){
  return(
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}