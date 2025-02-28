# Job Portal

A **Job Portal** web application that connects job seekers with employers. This platform allows users to browse job listings, apply for jobs, and manage applications while enabling employers to post job openings and manage candidates.

## 🚀 Features

### For Job Seekers
- 🔍 Browse and search for job openings
- 📄 Upload and manage resumes
- 📌 Save favorite jobs for later
- 📝 Apply for jobs directly through the portal
- 📊 Track application status

### For Employers
- 🏢 Post job listings
- 📂 Manage job applications
- 🛠 Filter and search candidates
- ✉️ Contact potential hires

### General Features
- 🏷️ User authentication & authorization (Job Seeker & Employer roles)
- 🎨 Responsive and user-friendly UI

---

## 🛠️ Tech Stack

### Frontend
- React.js (Vite for fast development)
- Tailwind CSS (for styling)
- Axios (for API requests)

### Backend
- Node.js + Express.js (REST API)
- MongoDB + Mongoose (Database)
- Cloudinary (for resume and profile image uploads)

### Authentication & Security
- JSON Web Token (JWT)
- bcrypt.js (password hashing)

---

## 🚀 Getting Started

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/en/download/)
- [MongoDB](https://www.mongodb.com/try/download/community)
- A Cloudinary account (for file storage)

### Installation

1. **Clone the repository**
   ```sh
   git clone https://github.com/SahilPattankude/Job-Board.git
   cd Job-Board
   ```

2. **Install dependencies**
   ```sh
   npm install
   cd client
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory and add:
   ```env
   PORT=3000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   ```

4. **Run the backend server**
   ```sh
   nodemon index.js
   ```

5. **Run the frontend**
   ```sh
   cd client
   npm run dev
   ```

6. **Open the app in the browser**
   ```
   http://localhost:5173
   ```
---

## 📞 Contact
For any inquiries or contributions, contact me at **pattankudesahil@gmail.conm**

---

🌟 **Star the repo if you found this helpful!** ⭐


