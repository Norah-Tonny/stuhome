import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import About from "./Pages/About";
import Contact from "./components/Contact";
import Help from "./components/Help";
import Listing from "./components/Listing";
import Detail from "./components/Detail";
import SingleItem  from "./components/SingleItem";
import State from "./State";
import './App.css'

const App = () => {
  const routeParams = useParams();
  return (
<State>


    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/listing" element={<Listing/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/help" element={<Help />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/hostel/:id" element={<SingleItem />} />
      </Routes>
      </BrowserRouter>
      </State>
  )
}
export default App;
                                                                                                                                                                                                                                                  