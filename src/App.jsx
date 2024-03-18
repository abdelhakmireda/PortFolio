
import Header from "./components/1-header/Header"
import Hero from "./components/2-hero/Hero"
import Main from "./components/3-main/Main"
import Contacts from "./components/4-contacts/Contacts"
import Footer from "./components/5-footer/Footer"
function App() {

  return (
    <div className="container">

    <Header />
    <div className="divider"></div>
    <Hero />
    <div className="divider"></div>
    <Main/>
    <div className="divider"></div>
    <Contacts />
    <div className="divider"></div>
    <Footer />

    </div>
  )
}

export default App
