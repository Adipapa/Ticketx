# TicketX

TicketX is a web-based event ticket sales application with an admin panel, event management, and ticket redemption.

## Features

- **User Roles:** Super Admin, Event Organizer, Ticket Redemption User.
- **Ticketing System:** Supports QR code scanning (web camera) and manual code entry.
- **Payment Integration:** Integrates with Flutterwave and PayPal.
- **Notifications:** SMS notifications via Twilio and email notifications via Nodemailer.
- **Tech Stack:**
  - **Frontend:** React (Vite, Tailwind CSS)
  - **Backend:** Node.js with Express
  - **Database:** PostgreSQL (via Supabase)
  - **Hosting:** Render (backend), Vercel (frontend)

## Setup

### Backend

1. Navigate to the `server` directory.
2. Install dependencies:
   ```bash
   npm install
