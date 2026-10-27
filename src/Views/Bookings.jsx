
import React from "react";
import { useSelector } from "react-redux";
import "primeicons/primeicons.css";
import "./Bookings.css";

function Bookings() {
    const bookingData = useSelector(
        (state) => state.bookings?.data ?? []
    );

    const userId = 1;

    const filteredBookings = Array.isArray(bookingData)
        ? bookingData.filter(
              (booking) => booking.user?.id === userId
          )
        : [];

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
                                        onClick={() => {}}
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
