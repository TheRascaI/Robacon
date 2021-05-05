import React from "react";

import "./App.css";
import ContactHeader from "./components/ContactHeader";
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
   <ContactHeader />
   <Navigation />
   
   <AboutSection />

   <WorkList />
<WorkSection />

<TeamSection />
<Contact />
<Footer />
   </div>
  );
}

export default App;

//  TweenMax.to(document.getElementById("myDiv"), 5, {
//   bezier:{curviness:1.25,
//   values:[
//     {x:100, y:250},
//     {x:300, y:0},
//     {x:500, y:400}
//   ]
//   ,autoRotate:true
// }
//   ,backgroundColor:"#f00"
//   ,ease:Power1.easeInOut
// }