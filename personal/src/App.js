import React, { useState } from 'react';
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Projectpage from "./pages/Projectpage";
import Aboutpage from "./pages/Aboutpage";
import Experiencepage from "./pages/Experiencepage";
import Servicepage from "./pages/Servicepage";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import { AnimatePresence } from 'framer-motion';

function App() {
  const [isLoading, setLoading] = useState(true);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <LoadingScreen setLoading={setLoading} />
      ) : (
        <div className="min-h-screen bg-gray-900 overflow-x-hidden">
          <Navbar />
          <Homepage />
          <Aboutpage />
          <Experiencepage />
          <Projectpage />
          <Servicepage />
          <Footer />
        </div>
      )}
    </AnimatePresence>
  );
}

export default App;
