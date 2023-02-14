import { BrowserRouter, Routes, Route }from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SigUp";
import About from "./Pages/About";
import Contact from "./components/Contact";
import Help from "./components/Help";
import Listing from "./components/Listing";
import './App.css'





const App = () => {
  return (

    
    <BrowserRouter>
      <Routes>
    

        <Route path="/" element={<Home />}/>
        <Route path="/listing" element={<Listing/>}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/about" element={About} />
        <Route path="/contact" element={Contact}/>
        <Route path="/help" element={Help}/>
      </Routes>
      </BrowserRouter>
  )
}
export default App;
