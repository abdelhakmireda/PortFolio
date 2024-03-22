
import { useEffect, useState } from "react"
import Header from "./components/1-header/Header"
import Hero from "./components/2-hero/Hero"
import Main from "./components/3-main/Main"
import Contacts from "./components/4-contacts/Contacts"
import Footer from "./components/5-footer/Footer"
function App() {
useEffect(()=>{
  window.addEventListener("scroll",() => {
  if(window.scrollY > 100){
    setshowScrollButton(true)
  }else{
    setshowScrollButton(false)
  }
  })
})
const [showScrollButton,setshowScrollButton] = useState(false);
  return (
    <div id="up" className="container">

    <Header/>
    <Hero />
    <div className="divider"></div>
    <Main/>
    <div className="divider"></div>
    <Contacts />
    <div className="divider"></div>
    <Footer />

      <a style={{ opacity: showScrollButton ? 1:0, transition: " 0.5s" }} href="#up">
      <button className="scrole-to-top icon-keyboard_arrow_up"></button>
    </a>
    
   
    </div>
  )
}

export default App
