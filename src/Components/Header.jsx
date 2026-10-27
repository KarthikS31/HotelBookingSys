import React from "react";
import './Header.css';
import "primeicons/primeicons.css";
import { NavLink, useLocation } from "react-router-dom";

function Header({scrollToView}){
    const location = useLocation();
    const isHome = location.pathname === "/";

    let headers = [{
        id: "home", title: <NavLink className={"title"} to={"/"}>Home</NavLink>,
        icon: <i className="pi pi-home"></i>
    },
    {
        id: "rooms", title:<NavLink className={"title"} to={"/"}>Available Rooms</NavLink>,
        icon: <i className="pi pi-building"></i>
    },
    {
        id: "bookings", title: <NavLink className={"title"} to={"/bookings"}>My Bookings</NavLink>,
        icon: <i className="pi pi-briefcase"></i>
    }]

    return(<div className="header">

        <div className="hotelName">Raddison Gold</div>

        <div className="header-tabs">
        { headers.map((data)=>{
                return(<div className="titles" key={data.id} 
                onClick={()=>{if(isHome && data.id=="rooms") scrollToView(data.id)}}>
                    <div style={{alignSelf:"center"}}>{data.icon}</div>
                    {data.title} 
                </div>)
            })
        }
        </div>

        <div className="user">
            <button>Login</button>
            <button>Sign Up</button>
        </div>
    </div>)
}



export default Header;
