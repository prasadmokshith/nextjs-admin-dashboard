# Next.js Admin Dashboard

A modern **Admin Dashboard** built using **Next.js App Router**, **React Query**, **Material UI**, and **AI-powered UI generation with Vercel v0 + shadcn/ui**.

This project demonstrates real-world frontend engineering concepts including:

- Authentication & Authorization
- AI-generated UI integration
- Data Fetching & State Management
- Reusable Component Architecture
- Dark Theme Support
- Responsive Dashboard Design
- Charts & Analytics Visualization

---

# 🔗 Live Demo

https://nextjs-admin-dashboard-brown-pi.vercel.app/dashboard

---

# 📸 Features

## 🔐 Authentication & Authorization

Role-based login implemented using cookies.

Authorization is managed based on user roles stored in browser cookies.

### Admin Access

- Email: `admin@gmail.com`
- Access to:
  - Dashboard
  - Users Management
  - AI Insights Dashboard

### User Access

- Email: `user@gmail.com`
- Restricted access to admin-only pages

---

## 📊 Dashboard Features

- Modern Admin Dashboard UI
- Sidebar Navigation
- Responsive Layout
- Dark / Light Theme Toggle
- Analytics Charts using Recharts
- Real-time Dashboard Metrics

---

## 👥 Users Management

- View Users
- Add Users
- Search Users
- Debounced Search Optimization
- Pagination
- User Details Modal
- Form Validation using Zod

---

## 🤖 AI Insights Dashboard (v0 Integration)

Integrated an AI-generated analytics dashboard using:

- Vercel v0
- shadcn/ui
- Tailwind CSS

This module demonstrates incremental AI-assisted UI adoption within an existing enterprise-style MUI application.

### Highlights

- AI-generated reusable components
- Interactive charts & analytics
- Activity feed
- KPI cards
- Performance metrics
- Modern SaaS-style UI
- Integrated into existing MUI application architecture
- Dark theme synchronization between MUI and Tailwind/shadcn
- Reusable AI-generated dashboard widgets

### AI Components Used

- `StatsCard`
- `ChartCard`
- `ActivityFeed`
- shadcn `Button`

---

# ⚡ Tech Stack

## Frontend

- Next.js (App Router)
- React
- TypeScript

## UI & Styling

- Material UI (MUI)
- Tailwind CSS
- shadcn/ui
- Lucide React Icons

## State & Data Management

- React Query (TanStack Query)

## Validation

- Zod

## Charts & Visualization

- Recharts

## API

- JSONPlaceholder API

---

# 📁 Folder Structure

```bash
app/
├── dashboard/
│   ├── page.tsx
│   ├── ai-insights/
│   │   └── page.tsx
│   └── users/
│       └── page.tsx
│
├── login/
│   └── page.tsx
│
├── components/
│   ├── Header.tsx
│   ├── Sidebar.tsx
│   ├── UserChart.tsx
│   ├── UserTable.tsx
│   └── AddUserForm.tsx
│
components/
│   ├── ui/
│   │   └── button.tsx
│   │
│   ├── stats-card.tsx
│   ├── chart-card.tsx
│   └── activity-feed.tsx
│
hooks/
├── useUsers.ts
├── useDebounce.ts
│
services/
└── api.ts
│
validations/
└── userSchema.ts
```

---

# ⚙️ Getting Started

## 1. Clone Repository

```bash
git clone https://github.com/prasadmokshith/nextjs-admin-dashboard.git

cd nextjs-admin-dashboard
```

---

## 2. Install Dependencies

```bash
npm install
```

---

## 3. Run Development Server

```bash
npm run dev
```

Open:

```bash
http://localhost:3000
```

---

# 🔐 Authentication Logic

Authentication is implemented using browser cookies.

## Admin Login

```txt
admin@gmail.com
```

### Permissions

- Dashboard Access
- Users Management Access
- AI Insights Dashboard Access

---

## User Login

```txt
user@gmail.com
```

### Permissions

- Dashboard Access
- Restricted Admin Features

---

# 📦 API Integration

Using:

```bash
https://jsonplaceholder.typicode.com/users
```

Handled with:

- React Query (`useQuery`)
- Custom reusable hooks

Example:

```ts
export const useUsers = () => {
  return useQuery<User[]>({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });
};
```

---

# 🧪 Validation

Form validation implemented using Zod.

Example:

```ts
userSchema.safeParse({ name, email });
```

---

# 🌙 Dark Theme Support

Implemented theme synchronization between:

- Material UI Theme Provider
- Tailwind CSS Dark Mode
- shadcn/ui Components

A single toggle controls both MUI-based pages and AI-generated Tailwind/shadcn pages.

---

# 🚀 AI Integration Architecture

This project demonstrates incremental AI adoption in an existing enterprise-style application.

### Existing Architecture

- MUI-based dashboard application
- React Query for server-state management
- Modular reusable component structure

### AI Integration

- Added new AI Insights module using Vercel v0
- Integrated Tailwind + shadcn/ui alongside existing MUI setup
- Preserved existing application architecture and business logic
- Reused existing authentication, layout, and theme systems

---

# 🚀 Deployment

Deployed using Vercel.

## Steps

1. Push code to GitHub
2. Import repository into Vercel
3. Configure environment (if needed)
4. Deploy

---

# 📌 Future Improvements

- Edit / Delete Users
- JWT Authentication
- Role-based Protected Routes
- Real Backend Integration
- AI Chat Assistant
- Export Dashboard Reports
- Advanced Analytics
- Unit & Integration Tests

---

# 🙌 Author

## Prasad S

GitHub:
https://github.com/prasadmokshith

LinkedIn:
(Add your LinkedIn profile)

---

# ⭐ Support

If you like this project, give it a star on GitHub ⭐
