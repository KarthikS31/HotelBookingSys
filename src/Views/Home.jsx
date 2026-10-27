import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setRoomFilters } from "../Reducers/HomeReducer";
import "primeicons/primeicons.css";
import "./Home.css";

function Home() {
    return (
        <div id="home" className="home">
            <h1>STAY PEACEFUL, EXPERIENCE</h1>
            <FilterComponent />
        </div>
    );
}

function FilterComponent() {
    const dispatch = useDispatch();

    const roomtype = {
        "SMALL": "Standard",
        "MEDIUM": "Deluxe",
        "LARGE": "Suites"
    };

    const today = new Date().toLocaleDateString("en-CA");

    const getNextDay = (date) => {
        const next = new Date(date + "T12:00:00");
        next.setDate(next.getDate() + 1);
        return `${next.getFullYear()}-${String(next.getMonth() + 1).padStart(2, "0")}-${String(next.getDate()).padStart(2, "0")}`;
    };

    const [guests, setGuests] = useState(1);
    const [checkin, setCheckin] = useState(today);
    const [checkout, setCheckout] = useState(getNextDay(today));
    const [selectedType, setSelectedType] = useState("SMALL");

    const handleSearch = () => {
        console.log(selectedType)
        dispatch(setRoomFilters({
            guests: Number(guests),
            checkin,
            checkout,
            roomType: selectedType
        }));
    };

    return (
        <div className="filterComponent">
            <div className="filterField">
                <label htmlFor="guests">Guests</label>
                <input
                    id="guests"
                    className="input"
                    type="number"
                    min="1"
                    placeholder="No. of guests"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                />
            </div>

            <div className="divider" />

            <div className="filterField">
                <label htmlFor="checkin">Check-in</label>
                <input
                    id="checkin"
                    className="input"
                    type="date"
                    min={today}
                    value={checkin}
                    onChange={(e) => {
                        const date = e.target.value;
                        setCheckin(date);

                        if (date >= checkout) {
                            setCheckout(getNextDay(date));
                        }
                    }}
                />
            </div>

            <div className="filterField">
                <label htmlFor="checkout">Check-out</label>
                <input
                    id="checkout"
                    className="input"
                    type="date"
                    min={getNextDay(checkin)}
                    value={checkout}
                    onChange={(e) => setCheckout(e.target.value)}
                />
            </div>

            <div className="divider" />

            <div className="filterField">
                <label htmlFor="roomType">Room Type</label>
                <select
                    id="roomType"
                    className="input"
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                >
                    {Object.entries(roomtype).map(([key, value]) => (
                        <option key={key} value={key}>
                            {value}
                        </option>
                    ))}
                </select>
            </div>

            <button
                className="searchButton"
                onClick={handleSearch}
                aria-label="Search rooms"
                title="Search rooms"
            >
                <i className="pi pi-search"></i>
            </button>
        </div>
    );
}

export default Home;