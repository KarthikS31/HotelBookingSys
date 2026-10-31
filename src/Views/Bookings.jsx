
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "primeicons/primeicons.css";
import "./Bookings.css";
import { getBookingByUserId } from "../Actions/BookingsAction";

function Bookings() {
    const dispatch = useDispatch();
    const bookingData = useSelector(
        (state) => state.bookings?.data ?? []
    );

    const user = useSelector((state) => state.auth.user);
    const userId = user?.id;
    const [sortOrder, setSortOrder] = useState("newest");
    const [statusFilter, setStatusFilter] = useState("ALL");

    useEffect(() => {
        if (userId != null) {
            dispatch(getBookingByUserId({userId}));
        }
    }, [userId, dispatch]);

    const filteredBookings = bookingData
        .filter(booking =>
            (booking.users?.id === userId) &&
            (statusFilter === "ALL" ||
                booking.bookingStatus === statusFilter)
        )
        .sort((a, b) => {
            const dateA = new Date(a.check_in);
            const dateB = new Date(b.check_in);

            return sortOrder === "newest"
                ? dateB - dateA
                : dateA - dateB;
        });

    const formatDate = (date) => {
        if (!date) return "-";

        return new Date(date).toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric"
        });
    };

    return (
        <div className="bookings-page" id="bookings">
            <div className="bookings-heading">
                <div>
                    <h1>My Bookings</h1>
                    <p>Manage your reservations and booking details.</p>
                </div>

                <span className="booking-count">
                    {filteredBookings.length} Bookings
                </span>
            </div>
            <div className="booking-filters">
                <div className="filter-group">
                    <label>Sort by date</label>
                    <select
                        value={sortOrder}
                        onChange={e => setSortOrder(e.target.value)}
                    >
                        <option value="newest">Newest first</option>
                        <option value="oldest">Oldest first</option>
                    </select>
                </div>

                <div className="filter-group">
                    <label>Booking status</label>
                    <select
                        value={statusFilter}
                        onChange={e => setStatusFilter(e.target.value)}
                    >
                        <option value="ALL">All statuses</option>
                        <option value="CONFIRMED">Confirmed</option>
                        <option value="CHECKEDIN">Checked In</option>
                        <option value="CANCELLED">Cancelled</option>
                        <option value="COMPLETED">Completed</option>
                    </select>
                </div>
            </div>
            {filteredBookings.length === 0 ? (
                <div className="no-bookings">
                    <i className="pi pi-calendar-times"></i>
                    <h2>No bookings found</h2>
                    <p>Your reservations will appear here.</p>
                </div>
            ) : (
                <div className="bookings-list">
                    {filteredBookings.map((booking) => {
                        const property = booking.property ?? {};
                        const imageSrc = property.image
                            ? property.image.startsWith("data:")
                                ? property.image
                                : `data:image/jpeg;base64,${property.image}`
                            : null;

                        return (
                            <div className="booking-card" key={booking.id}>
                                <div className="booking-card-top">
                                    <div>
                                        <span className="booking-label">
                                            BOOKING #{booking.id}
                                        </span>
                                        <h2>Room {property.name ?? "N/A"}</h2>
                                        <p className="room-type">
                                            {property.propType?.description ?? "Room"}
                                        </p>
                                    </div>

                                    <button
                                        className="edit-booking"
                                        title="Edit booking"
                                        onClick={() => { }}
                                    >
                                        <i className="pi pi-pencil"></i>
                                    </button>
                                </div>

                                <div className="booking-card-content">
                                    {imageSrc && (
                                        <img
                                            className="booking-image"
                                            src={imageSrc}
                                            alt={`Room ${property.name}`}
                                        />
                                    )}

                                    <div className="booking-details">
                                        <div className="booking-detail">
                                            <i className="pi pi-calendar-plus"></i>
                                            <div>
                                                <span>Check-in</span>
                                                <strong>
                                                    {formatDate(booking.check_in)}
                                                </strong>
                                            </div>
                                        </div>

                                        <div className="booking-detail">
                                            <i className="pi pi-calendar-minus"></i>
                                            <div>
                                                <span>Check-out</span>
                                                <strong>
                                                    {formatDate(booking.check_out)}
                                                </strong>
                                            </div>
                                        </div>

                                        <div className="booking-detail">
                                            <i className="pi pi-users"></i>
                                            <div>
                                                <span>Guests</span>
                                                <strong>{booking.guests ?? "-"}</strong>
                                            </div>
                                        </div>

                                        <div className="booking-detail">
                                            <i className="pi pi-wallet"></i>
                                            <div>
                                                <span>Total amount</span>
                                                <strong>
                                                    ₹{Number(booking.totalAmount ?? 0).toLocaleString("en-IN")}
                                                </strong>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="booking-card-footer">
                                    <span
                                        className={`booking-status ${(booking.bookingStatus ?? "UNKNOWN").toLowerCase()}`}
                                    >
                                        {(booking.bookingStatus ?? "UNKNOWN").replaceAll("_", " ")}
                                    </span>

                                    <span className="booking-room-price">
                                        ₹{Number(property.price ?? 0).toLocaleString("en-IN")} / night
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export default Bookings;
