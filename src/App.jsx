import Positions from "./Positions"
import Calltoaction from "./Calltoaction"
import Practiceareas from "./Practiceareas"
import Testimonials from "./Testimonials"
import Hero from "./hero"
import NavBar from "./nav"
import Partners from "./partners"
import ContactForm from "./Enquiries"
import Footer from "./footer"


function App() {

  return (
    <>
        <div>
          <NavBar/>
          <Hero/>
          <Practiceareas/>
          <Calltoaction/>
          <Testimonials/>
          <Positions/>
          <Partners/>   
          <ContactForm/>  
          <NavBar/>     
        
        </div>
    </>
  )
}

export default App
