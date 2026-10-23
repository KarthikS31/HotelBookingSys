import React from "react";
import './Home.css';

function Home() {
    return (<div id="home" className="home">
        <h1>STAY PEACEFUL, EXPERIENCE </h1>
        <FilterComponent/>
    </div>)
}

function FilterComponent(){
    const roomtype={
        Small:"Standard",
        Medium:"Deluxe",
        Large:"Suites"
    }

    return(<div className="filterComponent">
        <input className="input" type="number"  onChange={()=>{}}
            placeholder="GUEST(S)"
        />
        <div className="divider"/>
        <input className="input" type="number"  onChange={()=>{}}
            placeholder="ROOM(S)"
        />
        <div className="divider"/>
        <select placeholder="ROOM TYPE" onChange={()=>{}}>
            {Object.entries(roomtype).map(([k,v])=>{
                return(<option key={k}>{v}</option>)
            })
            }
        </select>
        
    </div>)
}


export default Home;