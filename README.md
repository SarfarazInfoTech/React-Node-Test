# React & Node.js Skill Test

## Project Overview
This project involves fixing login-related issues, implementing a RESTful API for "Meeting" functionality on both server and client sides, and ensuring smooth integration between them.

## Features Implemented
### 1. Bug Fixes
- Fixed backend issues that prevented the server from starting.
- Resolved frontend login bug to allow seamless authentication.

### 2. Meeting API Implementation
Implemented the following RESTful API endpoints:
- **GET /meeting** - Fetch all meetings.
- **POST /meeting/add** - Create a new meeting.
- **POST /meeting/addMany** - Add multiple meetings.
- **GET /meeting/view/:id** - Retrieve a single meeting by ID.
- **PUT /meeting/view/:id** - Edit a meeting.
- **PUT /meeting/changeStatus/:id** - Change the status of a meeting.
- **DELETE /meeting/delete/:id** - Soft delete a meeting.
- **POST /meeting/deleteMany** - Soft delete multiple meetings by IDs.

### 3. Frontend Integration
- Integrated all meeting-related API endpoints with the React frontend.
- Ensured proper data handling and UI updates.

## Setup Instructions
### Prerequisites
- Node.js (v16+ recommended)
- React (v18+ recommended)
- MongoDB (using a database)
- `.env` file with necessary environment variables

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/SarfarazInfoTech/React-Node-Test.git
   cd project-directory
   ```

2. Install dependencies for the backend:
   ```bash
   cd server
   npm install
   ```

3. Install dependencies for the frontend:
   ```bash
   cd client
   npm install
   ```

### Running the Project
1. Start the backend server:
   ```bash
   cd server
   npm start
   ```
2. Start the frontend React app:
   ```bash
   cd client
   npm start
   ```

## Testing Credentials
- **Email**: `admin@gmail.com`
- **Password**: `admin123`

## Code Style and Optimization
- Followed best practices for RESTful API development.
- Optimized code for readability and maintainability.
- Ensured efficient data handling in both frontend and backend.

## Conclusion
The project successfully resolves login issues, implements a robust meeting management API, and integrates all features seamlessly into the frontend application.

