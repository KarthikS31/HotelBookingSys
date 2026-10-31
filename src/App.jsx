
import { useEffect } from "react";
import "./App.css";

import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";

import Header from "./Components/Header";
import Popup from "./Components/Popup";

import Home from "./Views/Home";
import Rooms from "./Views/Rooms";
import Bookings from "./Views/Bookings";
import Login from "./Views/Login";


function App() {

  const token = useSelector((state) => state.auth.token);

  const scrollToView = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  if (!token) {
    return <Login />;
  }

  return (
    <div className="main-containter">
      <Header scrollToView={scrollToView} />

      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <Rooms />
          </>
        }
        />

        <Route path="/bookings" element={<Bookings />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Popup />
    </div>
  );
}

export default App;
