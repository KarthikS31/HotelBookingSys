import React, { useEffect, useMemo } from "react";
import './Rooms.css';
import { useDispatch, useSelector } from "react-redux";
import { bookRoom } from "../Actions/BookingsAction";

function Rooms() {
    const dispatch=useDispatch();
    const roomsData = useSelector((state) => state.rooms?.data);
    const filters = useSelector((state) => state.home?.filters);

    const filteredRooms = useMemo(() => {

        if(!filters.roomType) return roomsData;

        return roomsData.filter(
            (room) => room.propType?.type === filters.roomType
        );
    }, [roomsData, filters?.roomType]);

    return (<div className="container" id="rooms" >
        {filteredRooms.map((e) => {
            return SingleRoomCard(e,filters,dispatch)
        })}
    </div>)
}



function SingleRoomCard(data, filters, dispatch) {

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
                    onClick={() => { onClickBook(data, filters, dispatch) }}
                >
                    Book Now
                </button>
            </div>
        </div>
    );
}


function onClickBook(property, filters, dispatch) {
    let data = {}

    const days = (new Date(filters.checkout) - new Date(filters.checkin)) / (1000 * 60 * 60 * 24)

    data = {
        "user": { "id": 1 }, //hardcoded
        "property": { "id": property.id },
        "guests": Number(filters.guests),
        "check_in": `${filters.checkin}T14:00:00`,
        "check_out": `${filters.checkout}T11:00:00`,
        "totalAmount": days * property.price,
        "bookingStatus": "CONFIRMED"
    }

    dispatch(bookRoom(data))
}

export default Rooms;