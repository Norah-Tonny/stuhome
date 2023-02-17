import { BrowserRouter, Routes, Route }from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp"
import About from "./Pages/About";
import Contact from "./components/Contact";
import Help from "./components/Help";
import Listing from "./components/Listing";
import Details from "./components/Details";
import './App.css'





const App = () => {
  return (

    
    <BrowserRouter>
      <Routes>
    

        <Route path="/" element={<Home/>}/>
        <Route path="/listing" element={<Listing/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/help" element={<Help />} />
        <Route path="/details" element={<Details/>}/>
      </Routes>
      </BrowserRouter>
  )
}
export default App;
                                                                                                                                                                                                                                                  