# Muhammad Bilal Nazir | Portfolio Website

A modern single-page portfolio website for Muhammad Bilal Nazir, built to showcase a professional developer profile with a strong emphasis on full-stack engineering, AI research, and cybersecurity. The portfolio is implemented in React with Vite and TailwindCSS, using a dark professional theme, smooth motion effects, and a responsive single-page layout.

## Overview

This project was created as a personal portfolio website to present:

- Professional background and current technical focus
- Full-stack development experience
- AI and cybersecurity research work
- Academic and publication efforts
- Major projects and technical achievements
- Contact details and recruiter outreach options

The site is intentionally lightweight, front-end only, and easy to maintain. It does not require a backend server and is designed to support future additions such as more publications, case studies, and research updates.

## Personal Profile Included

The portfolio includes the following personal information:

- Name: Muhammad Bilal Nazir
- Title: CS Graduate | Full Stack Developer | AI & Cybersecurity Researcher
- Email: bachohan786@gmail.com
- LinkedIn: https://www.linkedin.com/in/mbilal-nazir
- GitHub: https://github.com/Bilal-Nazir-3360
- Location: Chiniot, Pakistan

## Tech Stack

- React
- Vite
- TailwindCSS
- Framer Motion
- EmailJS

## What Was Built

### Hero Section
- Name and title
- Professional tagline
- LinkedIn and GitHub buttons
- CV preview buttons
- Separate download options for resume files
- Modern dark hero design with glow accents

### About Section
- Short professional biography
- Developer-focused personal branding
- Profile image card

### Skills Section
- Organized skill cards for:
  - Languages
  - ML / AI
  - Web / Full-Stack
  - Tools
- Clean chip-style design

### Projects Section
- 6 project cards included:
  1. NEXTGEN-IDS
  2. PhishGuard
  3. Stellar Web Manager
  4. ShopHub
  5. DDPM
  6. Masked Autoencoder
- Each project includes a description, tags, and GitHub link

### Research Section
- Academic research overview for IDS and adversarial security work
- Highlights of research impact and direction

### Publications Section
- Added publication card with full manuscript details:
  - Title
  - Journal name
  - Manuscript number
  - Status: Under Review
  - Author list
  - Supervisor information
  - ORCID profile link
- Matches the same dark aesthetic and motion-based reveal approach

### Activities Section
- Timeline-style section describing leadership and campus roles
- Tags for community and academic engagement

### Contact Section
- EmailJS-powered contact form with:
  - Name
  - Email
  - Message
- Professional contact cards for email, LinkedIn, and GitHub
- Success/error messaging for form submission status

## Design Features

- Dark modern theme
- Responsive layout for desktop and mobile
- Smooth scrolling behavior
- Framer Motion reveal animations
- Clean TailwindCSS styling
- Card-based sections with strong developer portfolio style
- Professional image support for profile display

## Resume and CV Behavior

The portfolio includes resume assets and uses a preview-first flow:

- Clicking a resume button opens the PDF in a new tab for preview
- Download is available as a separate action if the user wants to save it

This makes the workflow more professional and user-friendly.

## Profile Image Setup

A profile image is included in the public assets folder and used by the portfolio:

- public/profile.png

This allows the portfolio to display a professional profile image directly without requiring a separate backend or external image host.

## Project Structure

```bash
src/
  App.jsx
  data.js
  index.css
  main.jsx
  components/
    About.jsx
    Activities.jsx
    Contact.jsx
    Education.jsx
    Footer.jsx
    Hero.jsx
    Icons.jsx
    Navbar.jsx
    Projects.jsx
    Publications.jsx
    Research.jsx
    Reveal.jsx
    SectionHeading.jsx
    Skills.jsx
public/
  profile.png
  Resume_Final.pdf
  MERN_Resume.pdf
```

## Key Files

### src/App.jsx
This file imports and renders all major sections of the portfolio in the correct layout order.

### src/data.js
This file stores all content for the site, including profile information, skills, research summaries, project cards, publication content, and activities.

### src/components/Publications.jsx
Contains the publication section card and formatting for journal metadata, author list, ORCID, and status.

### src/components/Hero.jsx
Contains the hero section, call-to-action buttons, and resume preview/download actions.

### src/components/Contact.jsx
Handles the EmailJS contact form, dynamic form state, and submission messages.

### src/components/Reveal.jsx
Provides the motion-based reveal animations used across sections.

### src/index.css
Handles the global dark theme, Tailwind import, and custom styling for the portfolio.

## EmailJS Configuration

The contact form sends two emails on each submission:

- a notification email to the site owner
- an automatic reply email to the sender

The auto-reply template should receive the sender email in a field named `email` or `to_email`, and the sender name in `name` or `to_name`.

Create a `.env` file in the root folder with:

```bash
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_notification_template_id
VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID=template_o3ivdop
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

The auto-reply template ID is set to `template_o3ivdop`, and the form sends explicit recipient and reply-to values so the sender receives the confirmation email correctly.

A sample file is also included as `.env.example`.

## Downloadable Files

The project includes PDF resume files in the public folder and root folder:

- Resume_Final.pdf
- MERN_Resume.pdf
- public/profile.png

## Install and Run

1. Install dependencies:

```bash
npm install
```

2. Start the local development server:

```bash
npm run dev
```

3. Create a production build:

```bash
npm run build
```

## Future Expansion Plan

This portfolio is structured so it can be expanded later with:

- More publications and research papers
- Conference presentations
- Certifications and achievements
- Project demos and live links
- Research blog content
- Resume updates and new achievements

## Notes

This is a frontend-only portfolio and does not require a backend. The project is intentionally simple and modular, which makes it easy to update and maintain over time.

## Summary

This portfolio website is a complete dark-themed single-page developer portfolio for Muhammad Bilal Nazir. It brings together personal branding, technical projects, AI and cybersecurity research, publication work, and contact outreach into a polished professional presentation that is ready for sharing and future updates.
