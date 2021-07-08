import React from "react";
import "./App.scss";
import AboutUs from "./components/AboutUs/AboutUs";

import Hero from "./components/Hero/Hero";

function App() {
  
  return (
    <div>
      {/* Hero section */}
      <Hero/>

      {/* About section */}
       <AboutUs/>
    </div>
  );
}

export default App;
