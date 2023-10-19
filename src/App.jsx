import './App.css'
import Nav from './components/1-nav.jsx'
import Home from './components/2-home.jsx'
import StatsBar from './components/3-statsBar.jsx'
import Services from './components/4-services.jsx'
import About from './components/5-about.jsx'
import Contact from './components/7-contact.jsx'

export default function App(){
  return(
    <>
      <Nav />
      <Home />
      <StatsBar />
      <Services />
      <About />
      <Contact />
    </>
  )
}
