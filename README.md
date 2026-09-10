# 🏺 Kiln & Clay

Kiln & Clay is a full-stack pottery studio discovery and booking platform that allows users to explore independent pottery studios across London and book available studio sessions.

Users can browse studio locations, explore featured pottery classes, view upcoming availability through an interactive booking calendar and reserve sessions based on real-time remaining capacity.

The project focuses on building a complete booking experience with persistent data, server-side validation, automated availability management, email confirmations and responsive user interfaces.



## 🔗 Live Demo

**[View Kiln & Clay Live](https://ss-pottery-class-booking.vercel.app/)**



## ✨ Features

- Browse independent pottery studios across London
- Filter studios by location
- Image carousels for individual studios
- Dedicated studio pages with studio information and booking availability
- Interactive booking calendar 
- Morning, afternoon and evening session selection
- Real-time remaining-space calculations
- Automatic disabling of fully booked sessions
- Automatic disabling of dates with no remaining availability
- Rolling 60-day booking availability
- Multi-guest bookings
- Server-side booking validation
- Booking confirmation emails
- Post-booking capacity refresh 
- Reusable featured pottery class cards
- Detailed featured class dialogs
- Contact form with database persistence
- Contact confirmation emails
- Loading, success and error states
- Responsive layouts across mobile, tablet and desktop



## 🛠 Tech Stack

### Frontend 

- Next.js
- React
- TypeScript
- Tailwind CSS v4
- shadcn/ui
- Base UI
- Lucide React

### Backend

- Next.js Route Handlers
- Prisma ORM
- PostgreSQL

### Services & Integrations
- Resend 
- React Email

### Tooling
- ESLint
- npm
- Git & GitHub



## ⚙️ How It Works

1. Users browse the available pottery studios and can filter them by location.
2. Selecting a studio opens its dedicated studio page containing studio information and future booking availability.
3. When a studio page is requested, the application ensures that future sessions exist within the rolling booking window.
4. Available session data is retrieved from PostgreSQL through Prisma and passed to the booking interface.
5. The booking calendar enables only dates containing sessions with remaining capacity.
6. Selecting a date displays the available morning, afternoon and evening sessions for that day.
7. Remaining capacity is calculated from existing bookings for each session.
8. Users select a session and submit their name, email address, number of guests and an optional message.
9. The booking API validates the request and checks that sufficient capacity remains before creating the booking.
10. After a successful booking, the interface refreshes its server data so updated availability is immediately reflected.
11. A confirmation email is sent through Resend without allowing an email delivery failure to invalidate an otherwise successful booking.
12. Users can also submit enquiries through the contact form, which validates and stores the message before attempting to send a confirmation email.



## 💡 Technical Decisions

### Rolling Booking Availability
* Studio sessions are maintained within a rolling 60-day booking window.
* When a studio page is requested, the application checks and creates any missing future sessions.
* Sessions are generated for morning, afternoon and evening time slots while Mondays are excluded from availability.
* Prisma `createMany` with `skipDuplicates` is used alongside a compound unique constraint on studio, date and time slot.
* This allows the booking window to move forward automatically without recreating existing sessions.

### Session Capacity Management
* Each studio session has a maximum capacity of 10 guests.
* Capacity is calculated from the total number of guests across the active bookings rather than simply counting booking records.
* Active bookings contribute to occupied session capacity.
* Sessions with no remaining spaces are disabled in the interface.
* Dates where every session is fully booked are automatically unavailable in the booking calendar.
* Capacity is also checked server-side before a booking is created so the interface is not relied upon as the only validation layer.

### Booking Calendar
* The booking calendar is generated dynamically from available session data.
* Only dates containing bookable sessions can be selected.
* Calendar navigation is bounded by the first and last months containing available sessions.
* Selecting a new date resets the previously selected session to prevent stale selections.
* The calendar uses a Monday-first layout and adapts across mobile and desktop displays.

### Server-Side Validation
* Booking and contact requests are handled through Next.js Route Handlers.
* Incoming data is validated before database operations are performed.
* Booking capacity is checked again on the server before persistence.
* Invalid requests return appropriate HTTP error responses and user-facing feedback.

### Database Design
* PostgreSQL provides persistent storage for studios, sessions, bookings and contact enquiries.
* Prisma is used for schema modelling, relational queries and database access.
* Studios contain multiple sessions, while individual sessions can contain multiple bookings.
* A compound unique constraint prevents duplicate time slots from being created for the same studio and date.

### Booking State Refresh
* Following a successful booking, the booking interface resets the selected date and session.
* Next.js router refresh is then used to retrieve updated server data.
* This allows remaining capacity and fully booked states to update immediately without requiring a manual page reload.

### Email Confirmation Flow
* Booking and contact confirmation emails are sent using Resend.
* React Email is used to create reusable HTML email templates.
* Email delivery is handled separately from database persistence.
* If an email provider request fails, the booking or contact enquiry remains successfully stored rather than being incorrectly treated as a failed submission.

### Featured Class Dialogs
* Featured pottery classes are stored as structured data rather than being hardcoded into separate components.
* A reusable class card renders each featured class from the shared data collection.
* Selecting `View class` opens a responsive dialog containing additional information about the class and what is included.
* Users can continue from the class information to the studio directory using the `Find a studio` call to action.

### Contact Form
* Contact form data is managed through controlled React inputs.
* Requests are validated server-side before being stored in PostgreSQL.
* The interface provides loading, success and error feedback.
* The submit button is disabled while a request is processing to prevent duplicate submissions.



## 🚀 Getting Started

Clone the repository and install the dependencies: 

```bash
npm install
```

Create a `.env` file in the project root and provide the required environment variables:

```env
DATABASE_URL="your_postgresql_connection_string"
RESEND_API_KEY="your_resend_api_key"
```

Apply the database migrations:
```bash
npx prisma migrate deploy
```

Then start the development server:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.



## 📦 Production Build

To create an optimised production build:

```bash
npm run build
```

Then run the production server with:

```bash 
npm start
```



## 🔐 Environment Variables

Kiln & Clay requires the following environment variables:

|      Variable      |                             Purpose                           |
|    ------------    |               ----------------------------------              |
|   `DATABASE_URL`   |           PostgreSQL connection string used by Prisma         |
|  `RESEND_API_KEY`  |  API key used to send booking and contact confirmation emails |

> **Warning:** Environment variables should never be committed to source control.



## 📱 Responsive Design

Kiln & Clay was designed and tested across mobile, tablet and desktop layouts.

The interface adapts across breakpoints to provide:
- Responsive studio cards and image carousels
- Adaptive studio and booking layouts
- Mobile-friendly booking calendar navigation
- Responsive session selection
- Accessible booking and contact forms
- Responsive featured class dialogs
- Consistent spacing and visual hierarchy across screen sizes



## 🔮 Future Improvements

Kiln & Clay is feature-complete for its current scope, with several possible extensions for future iterations:

- Allow users to select and book a specific pottery class
- Associate pottery classes with individual studios and sessions
- Add user accounts and booking history
- Allow users to manage or cancel existing bookings
- Add automated cancellation confirmation emails
- Add waiting lists for fully booked sessions
- Introduce studio-specific schedules and opening days
- Add administrator tools for managing studios, sessions and bookings
- Add automated reminders before upcoming sessions
- Add more advanced studio and class filtering
- Introduce transactional capacity handling for concurrent booking requests
- Verify a production email domain for customer-facing confirmation emails



## 📌 Project Status 

Kiln & Clay is feature-complete and deployed on Vercel.



## 📄 Licence

This project is licensed under the MIT licence.