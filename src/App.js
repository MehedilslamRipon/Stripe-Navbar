import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Sidemenu from './components/Submenu';

function App() {
   return (
      <div className="App">
         <Navbar />
         <Sidebar />
         <Hero />
         <Sidemenu />
      </div>
   );
}

export default App;
