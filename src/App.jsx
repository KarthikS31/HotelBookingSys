import { useEffect } from 'react';
import './App.css'
import Header from './Components/Header'
import Bookings from './Views/Bookings';
import Home from './Views/Home'
import Rooms from './Views/Rooms';
import { fetchAllRooms } from './Actions/RoomsAction';
import { useDispatch, useSelector } from 'react-redux';
import { getBookingByUserId } from './Actions/BookingsAction';
import Popup from './Components/Popup';
import { HashRouter, Route, Routes } from 'react-router-dom';



function App() {
  const dispatch = useDispatch();

  //initial api call 
  useEffect(() => {
    dispatch(fetchAllRooms());
    dispatch(getBookingByUserId({ userId: 1 }));
  }, [])




  const scrollToView = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  }

  return (<div className="main-containter">

    <Header scrollToView={scrollToView} />

    <Routes>
      <Route path="/" element={<><Home /> <Rooms /></>} />
      <Route path="/bookings" element={<Bookings />} />
    </Routes>
    
    <Popup />
  </div>)
}

export default App
