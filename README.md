<div align="center">

# 🏨 Hotel Booking System (PropBookingSys)

**A full-stack hotel and property reservation platform enabling users to search available rooms, view pricing, manage reservations, and track booking lifecycles.**

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)](https://redux.js.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Java](https://img.shields.io/badge/Java_17+-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)](https://openjdk.org/)
[![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white)](https://spring.io/projects/spring-boot)
[![Spring Security](https://img.shields.io/badge/Spring_Security-6DB33F?style=for-the-badge&logo=Spring-Security&logoColor=white)](https://spring.io/projects/spring-security)
[![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)](https://jwt.io/)
[![MySQL](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/)

[Features](#-features) • [Screenshots](#-screenshots) • [Tech Stack](#️-tech-stack) • [Getting Started](#-getting-started) • [API Reference](#-booking-api-reference)

</div>

---

## 📖 Application Overview

The **Hotel Booking System** decouples a reactive client interface from a secure RESTful backend:
* **Frontend:** Built with React, Redux, and Vite to provide responsive room filtering, reservation workflows, and personal booking dashboards.
* **Backend:** Powered by Spring Boot and Spring Security with stateless JWT authentication, handling room availability logic, reservation creation, and status transitions (`Check-In`, `Check-Out`, `Cancel`).
* **Database:** Uses MySQL with Spring Data JPA / Hibernate to persist user accounts, properties, room categories, and transactional booking histories.

> **Repository Note:** This repository houses the **React frontend**. The Spring Boot backend resides in a separate repository and is documented below for full-stack setup and context.

---

## ✨ Features

* 🔐 **Authentication & Security:** User registration and login protected via stateless JSON Web Token (JWT) authentication.
* 🔍 **Dynamic Room Search:** Filter available rooms by guest capacity, check-in/check-out dates, and room type.
* 🛏️ **Room Discovery:** Browse room categories, amenities, and nightly rates.
* 📅 **Instant Reservations:** End-to-end room booking flow with immediate confirmation views.
* 📋 **Booking Management:** View personal reservation history with date sorting and status filtering.
* 🔄 **Lifecycle Operations:** Dedicated backend endpoints supporting booking cancellations, check-ins, and check-outs.

---

## 📸 Screenshots

### 🔐 Login Screen
<img width="1916" height="930" alt="Login Screen" src="https://github.com/user-attachments/assets/6fecdac7-fe18-40de-8175-0000afb4930c" />

---

### 🏠 Home & Room Search
<img width="1917" height="917" alt="Home and Room Search" src="https://github.com/user-attachments/assets/74f798c7-6c97-4ae8-90bf-e5822420aaa9" />

---

### 🛏️ Available Rooms
<img width="1917" height="862" alt="Available Rooms" src="https://github.com/user-attachments/assets/8340b0c5-65d9-44dc-a331-05970200d23b" />

---

### 📅 My Bookings
<img width="1917" height="921" alt="My Bookings" src="https://github.com/user-attachments/assets/a7ef9f99-6957-42f1-ba84-314c10426141" />

---

## 🛠️ Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend** | React, Redux (State Management), JavaScript (ES6+), CSS3, PrimeIcons, Vite |
| **Backend** | Java 17+, Spring Boot, Spring Security, JWT Authentication, Spring Data JPA / Hibernate, REST APIs |
| **Database** | MySQL |
| **Build Tools** | npm, Vite, Maven (`mvnw`) |

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your local machine:
* **Node.js** & **npm**
* **Java JDK** (Version 17 or higher)
* **MySQL Server**
* **Maven** (or use the included Maven Wrapper `mvnw`)

---

### 1. Backend Setup (Spring Boot)

1. **Create the Database:**
   Create a new MySQL database named `propbookingsys`:
   ```sql
   CREATE DATABASE propbookingsys;
