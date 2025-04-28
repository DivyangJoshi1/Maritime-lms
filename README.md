# Maritime LMS

Local Setup Instructions for running the Maritime LMS application on your local machine.

---

## 🚀 Frontend (React App)

### 1. Clone the repository

```bash
git clone <frontend-repo-url>
cd <frontend-folder-name>
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the frontend server

```bash
npm run dev
```

### 4. Visit the application

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

## 🛠️ Backend (Node.js Express App)

### 1. Clone the repository

```bash
git clone <backend-repo-url>
cd <backend-folder-name>
```

### 2. Install dependencies

```bash
npm install
```

### 3. Navigate to `src` directory and start the backend server

```bash
cd src
node server.js
```

The server will start on:  
[http://localhost:5000](http://localhost:5000)

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
