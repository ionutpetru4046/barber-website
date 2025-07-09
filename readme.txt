// Folder Structure

Project Structure Overview
Once created, your project should look like this:

barber-website/
├─ app/
│  ├─ page.tsx        → Homepage
│  ├─ services/       → Services page
│  ├─ booking/        → Booking form
│  ├─ contact/        → Contact page
│  └─ admin/          → Admin login/dashboard
├─ components/        → Navbar, Footer, Cards, etc.
├─ lib/               → DB connection (MongoDB)
├─ models/            → Booking & Admin models
├─ pages/api/         → API routes (e.g., bookings)
├─ styles/            → Global styles if needed
├─ tailwind.config.ts
└─ tsconfig.json