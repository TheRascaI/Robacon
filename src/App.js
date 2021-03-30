import React from "react";

import "./App.css";
import Navigation from "./components/Navigation";
import AboutSection from "./components/AboutSection";
import WorkSection from "./components/WorkSection";
import WorkList from "./components/WorkList";
import Contact from "./components/Contact";
import TeamSection from "./components/TeamSection";
import Footer from "./components/Footer";

const App = () => {
  return (
   <div id="app">
<Navigation />
<AboutSection />
<WorkSection />
<WorkList />
<TeamSection />
<Contact />
<Footer />
   </div>
  );
}

export default App;