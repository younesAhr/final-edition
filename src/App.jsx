import './App.css'
import Nav from './components/1-nav.jsx'
import Home from './components/2-home.jsx'
import StatsBar from './components/3-statsBar.jsx'
import Services from './components/4-services'

export default function App(){
  return(
    <>
      <Nav />
      <Home />
      <StatsBar />
      <Services />
    </>
  )
}
