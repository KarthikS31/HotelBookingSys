import React from "react";
import './Header.css';
import "primeicons/primeicons.css";

function Header({scrollToView}){

    let headers = [{id:"home", title: "Home", icon: <i class="pi pi-home"></i> },
    { id:"rooms", title: "Available Rooms", icon: <i class="pi pi-building"></i> },
    { id:"bookings", title: "My Bookings", icon: <i class="pi pi-briefcase"></i> }]
    
    return(<div className="header">

        <div className="hotelName">Raddison Gold</div>

        <div className="header-tabs">
        { headers.map((data)=>{
                return(<div className="titles" key={data.title} 
                onClick={()=>{scrollToView(data.id)}}>
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
