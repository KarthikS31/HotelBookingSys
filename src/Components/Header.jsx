import React, { useState } from "react";
import "./Header.css";
import "primeicons/primeicons.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Reducers/AuthReducer";

function Header({ scrollToView }) {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [showDropdown, setShowDropdown] = useState(false);

    const user = useSelector((state) => state.auth.user);
    const isHome = location.pathname === "/";

    const headers = [
        {
            id: "home",
            title: <NavLink className="title" to="/">Home</NavLink>,
            icon: <i className="pi pi-home"></i>
        },
        {
            id: "rooms",
            title: <NavLink className="title" to="/">Available Rooms</NavLink>,
            icon: <i className="pi pi-building"></i>
        },
        {
            id: "bookings",
            title: <NavLink className="title" to="/bookings">My Bookings</NavLink>,
            icon: <i className="pi pi-briefcase"></i>
        }
    ];

    const handleLogout = () => {
        dispatch(logout());
        setShowDropdown(false);
        navigate("/");
    };

    return (
        <div className="header">
            <div className="hotelName">Raddison Gold</div>

            <div className="header-tabs">
                {headers.map((data) => (
                    <div
                        className="titles"
                        key={data.id}
                        onClick={() => {
                            if (isHome && data.id === "rooms") {
                                scrollToView(data.id);
                            }
                        }}
                    >
                        <div style={{ alignSelf: "center" }}>
                            {data.icon}
                        </div>
                        {data.title}
                    </div>
                ))}
            </div>

            <div className="user-menu">
                <button
                    type="button"
                    className="user-icon-btn"
                    onClick={() => setShowDropdown((prev) => !prev)}
                    aria-label="User menu"
                    aria-expanded={showDropdown}
                >
                    <i className="pi pi-user"></i>
                </button>

                {showDropdown && (
                    <div className="user-dropdown">
                        <div className="dropdown-user-name">
                            <i className="pi pi-user"></i>
                            <span>{user?.name || user?.mail || "User"}</span>
                        </div>

                        <div className="dropdown-divider"></div>

                        <button
                            type="button"
                            className="logout-btn"
                            onClick={handleLogout}
                        >
                            <i className="pi pi-sign-out"></i>
                            <span>Logout</span>
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Header;