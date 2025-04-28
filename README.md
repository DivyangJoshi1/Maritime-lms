# Maritime LMS

Local Setup Instructions for running the Maritime LMS application on your local machine.

## Tech Stack
### Frontend
- **React**: Frontend library for building responsive UI.
- **React Router DOM**: Client-side routing for navigating between pages.
- **Axios**: For making API requests to the backend.
- **Material UI (MUI)**: For styling components and creating a clean, professional UI.

### Frontend
- **Node.js**: JavaScript runtime environment for server-side development.
- **Express.js**: Web application framework for Node.js APIs.
- **Sequelize ORM**: For interacting with the PostgreSQL database (Course, Company, User-Course management).
- **Mongoose ORM**: For interacting with MongoDB (Authentication, User Management).

### Database
1. Mongodb : User registration and authentication
             Managing user roles and permissions
2. PostgreSQL: Managing Courses
               Managing Companies
               Tracking assigned courses and user progress
### Others:
**JWT (JSON Web Tokens)** – For secure user authentication and authorization.
**Bcrypt.js** – For hashing user passwords securely.
**dotenv** – For managing environment variables.

**Special Highlight:** MongoDB is used exclusively for Authentication and User Management because of its flexible document structure and fast access.
PostgreSQL is used for structured data like Courses, Companies, and Course Assignments where relational integrity is important.



---
## Clone the repository

```bash
git clone <maritime-lms-repo-url>
cd maritime-lms
```


## Install dependencies
### 1. Frontend

go to frontend folder
```bash
cd frontend 
```

```bash
npm install
```

### 2. Start the frontend server

```bash
npm run dev
```

### 3. Visit the application

Open your browser and navigate to:  
[http://localhost:5173](http://localhost:5173)

---

### 📄 Pages Available

- **Login Page**: `/login`
- **Register Page**: `/register`
- **Reset Password Page**: `/reset-password`

✅ Authentication flow is fully functional.  
❗ Dashboard integration is under development. Althogh here is postman documentation of fully functional backend : https://documenter.getpostman.com/view/40012166/2sB2j1hsLc

---


### 4. backend

```bash
npm install
```

### 5. Navigate to `backend` folder and start the backend server

```bash
cd backend
node server.js
```

The server will start on:  
[http://localhost:5000](http://localhost:5000)

### 5. start monogodb

```bash
mongod

---

✅ APIs for Authentication and Courses are ready and tested via Postman.

---

## ⚡ Environment Variables

Make sure PostgreSQL database is running locally.

Create a `.env` file in the backend root directory.

Example `.env`:

```ini
DATABASE_URL=postgresql://username:password@localhost:5432/maritimelms
JWT_SECRET=your_jwt_secret
```

---

## 📷 Live Website Screenshots
![WhatsApp Image 2025-04-28 at 14 32 34_34535a8e](https://github.com/user-attachments/assets/088d5ed9-a1ca-436b-a2de-97dbedf0f27b)

![WhatsApp Image 2025-04-28 at 14 33 18_41bb8a5e](https://github.com/user-attachments/assets/83c51961-4370-4196-bab8-7046fd449350)

![WhatsApp Image 2025-04-28 at 14 33 38_d6886121](https://github.com/user-attachments/assets/7fd44f70-e4f7-41ae-b786-239cda08f59e)

![WhatsApp Image 2025-04-28 at 14 14 21_661cc6f4](https://github.com/user-attachments/assets/a19c4e13-72bf-491a-a3a8-ef85f0c532b4)

![WhatsApp Image 2025-04-28 at 14 14 30_fcc33fdb](https://github.com/user-attachments/assets/cb141932-2690-4563-8a88-6f473aa8950d)

![WhatsApp Image 2025-04-28 at 14 14 43_fc96f721](https://github.com/user-attachments/assets/4067b69b-11a2-4c15-a94b-f91a12d6c3bc)

![WhatsApp Image 2025-04-28 at 14 14 43_fc96f721](https://github.com/user-attachments/assets/1f11a236-981c-4ff3-a10c-266de50db5e0)

![WhatsApp Image 2025-04-28 at 14 14 43_fc96f721](https://github.com/user-attachments/assets/7326bbeb-1f63-498f-a646-8bb16a668206)

---
