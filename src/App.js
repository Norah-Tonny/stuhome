import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import About from "./Pages/About";
import Contact from "./components/Contact";
import Help from "./components/Help";
import Listing from "./components/Listing";
import Dashboard from "./components/Dashboard";
import Logout from "./components/Logout"
import SingleItem from "./components/SingleItem";
import State from "./State";
import './App.css'
import Dashboard1 from "./components/Dashboard1";
import Place from "./components/Place";


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
          <Route path="/contact" element={<Contact />} />
          <Route path="/help" element={<Help />} />
        <Route path="/logout" element={<Logout />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/hostel/:id" element={<SingleItem />} />
          <Route path="/Dashboard1" element={<Dashboard />} />
          <Route path="/Place"  element={<Place />}/>

      </Routes>
      </BrowserRouter>
      </State>
  )
}
export default App;
                                                                                                                                                                                                                                                  