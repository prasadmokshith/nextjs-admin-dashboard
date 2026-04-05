# Next.js Admin Dashboard

A modern **Admin Dashboard** built using **Next.js (App Router)**, **React Query**, and **Material UI**.
This project demonstrates real-world frontend concepts like authentication, data fetching, validation, and UI design.

---

## 🔗 Live Demo

https://nextjs-admin-dashboard-brown-pi.vercel.app/dashboard

---

## 📸 Features

- 🔐 Authentication (Role-based: Admin / User)
- 📊 Dashboard UI with sidebar navigation
- 👥 Users Management (View + Add Users)
- ✅ Form Validation using Zod
- ⚡ Data Fetching with React Query
- 🎨 UI built with Material UI (MUI)
- 🚀 Fully responsive design
- 🌐 API integration (JSONPlaceholder)

---

## 🛠️ Tech Stack

- Next.js (App Router)
- TypeScript
- Material UI (MUI)
- React Query (TanStack Query)
- Zod
- JSONPlaceholder API

---

## 📁 Folder Structure

app/
├── dashboard/
│ ├── page.tsx
│ └── users/
│ └── page.tsx
├── components/
│ ├── Sidebar.tsx
│ ├── UserTable.tsx
│ └── AddUserForm.tsx
├── hooks/
│ └── useUsers.ts
├── validations/
│ └── userSchema.ts

---

## ⚙️ Getting Started

1. Clone the repo
   git clone https://github.com/prasadmokshith/nextjs-admin-dashboard.git
   cd nextjs-admin-dashboard

2. Install dependencies
   npm install

3. Run the app
   npm run dev

Open http://localhost:3000

---

## 🔐 Authentication Logic

- Role is stored in cookies
- Admin → can access Users page
- User → restricted access

---

## 📦 API Integration

Using:
https://jsonplaceholder.typicode.com/users

Handled with React Query (`useQuery`)

---

## 🧪 Validation

Form validation is implemented using Zod

Example:
userSchema.safeParse({ name, email });

---

## 🚀 Deployment

Deployed using Vercel

Steps:

1. Push code to GitHub
2. Import repo in Vercel
3. Click Deploy

---

## 📌 Future Improvements

- Edit / Delete Users
- Proper JWT Authentication
- Charts & Analytics
- Dark Mode
- Pagination & Filtering

---

## 🙌 Author

Prasad S

GitHub: https://github.com/prasadmokshith
LinkedIn: (Add your profile)

---

## ⭐ If you like this project

Give it a star on GitHub ⭐
