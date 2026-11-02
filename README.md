Hotel Booking System
A full-stack hotel booking application where users can browse available rooms, check room details and prices, make reservations, and manage their bookings.
Screenshots
Login

Home and room search

Available rooms

Booking confirmation

My bookings

Features
- User registration and login
- JWT-based authentication
- Browse available rooms and view room types and nightly prices
- Search rooms using guest count, check-in date, check-out date and room type
- Book a room and view booking confirmation
- View personal booking history
- Sort bookings by date and filter them by status
- Backend endpoints for booking cancellation, check-in and check-out
Tech Stack
Frontend
- React
- Redux for state management
- JavaScript
- CSS
- PrimeIcons
- Vite
Backend
- Java
- Spring Boot
- Spring Security
- JSON Web Token (JWT) authentication
- Spring Data JPA / Hibernate
- REST APIs
Database
- MySQL
Application Overview
The React frontend communicates with the Spring Boot backend through REST APIs. The backend handles authentication, property and room data, booking operations, and booking status management. MySQL is used to persist user, property, property-type and booking information.
Run Locally
Prerequisites
- Node.js and npm
- Java (17 or later)
- MySQL
- Maven (or the Maven wrapper included with the backend project)
1. Start the backend
1. Create a MySQL database named propbookingsys.
2. Configure the database connection and JWT secret in the backend application configuration.
3. Start the Spring Boot application from your IDE, or run:
   ./mvnw spring-boot:run
   On Windows, use mvnw.cmd spring-boot:run if the Maven wrapper is available.
2. Start the frontend
1. Open the frontend project folder.
2. Install dependencies:
   npm install
3. Make sure the API base URL in the frontend API configuration points to your running backend.
4. Start the Vite development server:
   npm run dev
5. Open the local URL printed in the terminal (Vite commonly uses http://localhost:5173).
Do not commit database passwords, JWT secrets, or other credentials to the repository. Keep local secrets in your environment or application-specific configuration files that are excluded from Git.

Booking API
The Spring Boot backend exposes booking operations under /booking:
Method	Endpoint	Purpose
GET	/booking?userId={userId}	Get bookings for a user
GET	/booking?bookingId={bookingId}	Get a booking by ID
POST	/booking	Create a booking
PUT	/booking/cancel?bookingId={bookingId}	Cancel a booking
PUT	/booking/checkin?bookingId={bookingId}	Check in
PUT	/booking/checkout?bookingId={bookingId}	Check out


Notes
- This repository contains the React frontend. The backend is a separate Spring Boot application and is described here for completeness.
- The application is configured for local development. Update the API URL and backend configuration for your own environment.
Author
Karthik S
