import React from "react";
import './Header.css';
import "primeicons/primeicons.css";

function Header(){

    let headers = [{ title: "Home", icon: <i class="pi pi-home"></i> },
    { title: "Available Rooms", icon: <i class="pi pi-building"></i> },
    { title: "My Bookings", icon: <i class="pi pi-briefcase"></i> }]
    
    return(<div className="header">

        <div className="hotelName">Raddison Gold</div>

        <div className="header-tabs">
        { headers.map((data)=>{
                return(<div className="titles" key={data.title} onClick={()=>{console.log(title)}}>
                    <div style={{alignSelf:"center"}}>{data.icon}</div>
                    {data.title} 
                </div>)
            })
        }
        </div>
    </div>)
}



export default Header;
