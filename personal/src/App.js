import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Projectpage from "./pages/Projectpage"
import Aboutpage from "./pages/Aboutpage"
import Servicepage from "./pages/Servicepage";
import Footer from "./components/Footer";
import { Routes, Route, Switch, Link } from 'react-router-dom';
function App() {
  return (
    <div>
            < Navbar/>
            <Homepage/>
      <Aboutpage/>
      <Projectpage/>
      <Servicepage/>
      <Footer/>
      
      <Routes>

      <Route path="/home" element={<Homepage/>}/>
      <Route path="/About" element={<Aboutpage/>}/>
      <Route path="/Project" element={<Projectpage/>}/>
      <Route/>
  
      
    </Routes>
    </div>
  );
}

export default App;
