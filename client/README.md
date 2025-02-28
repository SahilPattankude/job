# Job Posting Website

## Overview
This is a job posting website that allows employers to post job listings and job seekers to browse and apply for jobs.

## Features
- User authentication (Sign up/Login)
- Employer dashboard to post and manage job listings
- Job seeker dashboard to browse and apply for jobs
- Search and filter job listings
- Responsive design for mobile and desktop
- Admin panel for managing users and job listings

## Technologies Used
- Frontend: HTML, CSS, JavaScript, React.js
- Backend: Node.js, Express.js
- Database: MongoDB
- Authentication: JWT (JSON Web Tokens)


## Installation & Setup

### Prerequisites
Make sure you have the following installed on your system:
- Node.js
- npm (Node Package Manager) or yarn
- MongoDB (for local development)

### Steps to Run Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/SahilPattankude/Job-Board.git
   cd Job-Board
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```
     PORT=3000
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_secret_key
     ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open the website in your browser at `http://localhost:3000`



