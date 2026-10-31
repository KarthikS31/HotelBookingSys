import React, { useEffect, useMemo } from "react";
import './Rooms.css';
import { useDispatch, useSelector } from "react-redux";
import { bookRoom } from "../Actions/BookingsAction";

function Rooms() {
    const dispatch = useDispatch();
    const roomsData = useSelector((state) => state.rooms?.data);
    const filters = useSelector((state) => state.home?.filters);
    const user = useSelector((state) => state.auth.user);
    const userId = user?.id;

    const filteredRooms = useMemo(() => {

        if (!filters.roomType) return roomsData;

        return roomsData.filter(
            (room) => room.propType?.type === filters.roomType
        );
    }, [roomsData, filters?.roomType]);

    return (<div className="container" id="rooms" >
        {filteredRooms.map((e) => {
            return SingleRoomCard(e, filters, dispatch, userId)
        })}
    </div>)
}



function SingleRoomCard(data, filters, dispatch, userId) {

    return (
        <div key={data.id} className="roomCard">
            <img src={`data:image/jpeg;base64,${data.image}`} alt={data.name} />

            <div className="roomDetails">
                <div className="roomHeader">
                    <div>
                        <h3 className="roomTitle">{data.name}</h3>
                        <span className="roomType">
                            {data.propType?.description}
                        </span>
                    </div>

                    <div className="roomPrice">
                        ₹{data.price}
                        <small>per night</small>
                    </div>
                </div>

                <button
                    className="bookButton"
                    disabled={!filters.roomType}
                    onClick={() => { onClickBook(data, filters, dispatch, userId) }}
                >
                    Book Now
                </button>
            </div>
        </div>
    );
}


function onClickBook(property, filters, dispatch, userId) {

    const showError = (message) => {
        dispatch(showPopup({ type: "error", message }));
    };

    if (!userId) {
        return showError("Please login to book a room.");
    }

    if (!property?.id) {
        return showError("Invalid room selected.");
    }

    if (!filters.checkin || !filters.checkout) {
        return showError("Please select check-in and check-out dates.");
    }

    const checkin = new Date(filters.checkin);
    const checkout = new Date(filters.checkout);

    if (isNaN(checkin.getTime()) || isNaN(checkout.getTime())) {
        return showError("Please select valid dates.");
    }

    if (checkout <= checkin) {
        return showError("Check-out date must be after check-in date.");
    }

    const guests = Number(filters.guests);

    if (!Number.isInteger(guests) || guests <= 0) {
        return showError("Please enter a valid guest count.");
    }

    if (!property.price || Number(property.price) <= 0) {
        return showError("Invalid room price.");
    }

    const days = (checkout - checkin) / (1000 * 60 * 60 * 24);

    const data = {
        users: { id: userId },
        property: { id: property.id },
        guests,
        check_in: `${filters.checkin}T14:00:00`,
        check_out: `${filters.checkout}T11:00:00`,
        totalAmount: days * Number(property.price),
        bookingStatus: "CONFIRMED"
    };

    dispatch(bookRoom(data));

}

export default Rooms;