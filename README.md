# Pottery Class Booking App

A thoughtfully designed full-stack web platform showcasing independent pottery studios and enabling users to explore and book ceramic classes across London.

Built as a portfolio case study, this project focuses on clean UX, scalable backend architecture, and modern full-stack best practices.


## Tech Stack 

Frontend
- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- Turbopack

Backend
- Next.js Route Handlers (API routes)
- Prisma ORM (v6)
- PostgreSQL (Neon)

Tooling
- ESLint
- npm

## Features

🏙 Studios directory with location-based filtering
🎠 Image carousels for each studio
📍 Location filtering (Hackney, Greenwich, Islington, Peckham)
🎟 Studio booking flow
📨 Contact form with full database persistence
🎨 Custom design system (clay-inspired palette)
📱 Fully responsive layout


🔒 Development Notes
- Prisma v6 chosen for stability
- UUID-based primary keys for scalability
- Data stored in Neon-managed PostgreSQL
- API routes run server-side only (no direct DB access from frontend)

## Status
🚧 In active development
Backend persistence layer implemented and verified.

