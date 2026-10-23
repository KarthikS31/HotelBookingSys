import './App.css'
import Header from './Components/Header'
import Home from './Views/Home'

function App() {
  const scrollToView=(id)=>{
    document.getElementById(id).scrollIntoView({behavior:"smooth"});
  }

  return (<div className="main-containter">
    <Header scrollToView={scrollToView}/>
    <Home id="home"/>
    <div id="rooms"></div>
    <div id="bookings"></div>
  </div>)
}

export default App
