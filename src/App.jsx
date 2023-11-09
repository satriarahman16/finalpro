import NavbarComponent from "./components/NavbarComponent"
// import FooterComponent from "./components/FooterComponent"

import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import KelasPage from "./pages/KelasPage"
import TestimonialPage from "./pages/TestimonialPage"
import FaqPage from "./pages/FaqPage"
import SyaratKetenPage from "./pages/SyaratKetenPage"


function App() {
  return <div>
    <NavbarComponent />
    <Routes>
      <Route path="/" Component={HomePage}/>
      <Route path="/kelas" Component={KelasPage}/>
      <Route path="/testimonial" Component={TestimonialPage}/>
      <Route path="/faq" Component={FaqPage}/>
      <Route path="/syaratketen" Component={SyaratKetenPage}/>
    </Routes>
    {/* <FooterComponent /> */}
  </div>
}

export default App
