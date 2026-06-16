# CodeComb v2 — Project Reference
> Design reference for Figma Make.

---

## Overview

**CodeComb** is a software agency landing page presenting value proposition, services, projects, tech stack, development process, and a contact section.

Visual identity: **dark aesthetic with vibrant yellow (#EDE500) as the primary accent**, inspired by a honeycomb/bee brand metaphor.

---

## Colors

| Role | Color |
|------|-------|
| Page background | `#1e1e1e` |
| Elevated surfaces (cards, navbar) | `#232323` |
| Borders / dividers | `#303030` |
| Body text | `#ffffff` |
| **Primary accent** | `#ede500` (yellow) |
| Text on primary | `#1e1e1e` |
| Muted / secondary text | `#c3c3c3` |

Icon badges use a 10% opacity yellow background with a full yellow icon. Card borders are very subtle (5% yellow). Card backgrounds are slightly transparent over the dark surface.

---

## Typography

- Font: **Inter**
- Section headings: large, bold — key words highlighted in yellow
- Hero headline: extra large, bold, two lines
- Card titles: medium, semi-bold or bold
- Body / descriptions: light weight, muted gray
- Brand logo text: extra bold, yellow

---

## Background

Three fixed layers stacked behind all content:

1. **Dark radial gradient** — subtle depth, darker at the edges
2. **Six floating yellow blobs** — large blurred circles, barely visible on desktop, slightly more visible on mobile; each drifts slowly and independently
3. **Frosted overlay** — gentle blur + three soft yellow glows positioned top-left, top-right, and bottom-center of the screen

---

## Page Sections

| # | Section | Status |
|---|---------|--------|
| 1 | Navbar | ✅ Done |
| 2 | Hero | ✅ Done |
| 3 | Why Choose Us | ✅ Done |
| 4 | Services | ✅ Done |
| 5 | Projects | 🚧 In progress |
| 6 | Technologies | 🚧 Placeholder |
| 7 | Process | 🚧 Placeholder |
| 8 | Contact | 🚧 Placeholder |
| — | Flying Bee | ⏸ Disabled |

---

## Section Descriptions

### Navbar
Floating pill-shaped bar centered at the top of the page. Contains the **CodeComb** logo on the left and navigation links on the right. Currently has a yellow "Contact Us" CTA button on the far right.

**Updates:**
- Apply Apple liquid glass effect to the navbar
- Remove the CTA button
- Start at full screen width and shrink + center as the user scrolls down

**Links:** Why choose us · Services · Projects · Technologies · Our process

---

### Hero
Full-height section split horizontally. Left side has a short welcome badge (yellow vertical bar + text), a large two-line headline ("Engineering Tomorrow's Digital Experiences"), a paragraph description, and two CTA buttons (solid yellow + outlined yellow). Right side shows a 3D animated bees-and-honeycomb scene the user can orbit with the mouse.

**Updates:**
- The hero should have a floating / elevated visual style

---

### Why Choose Us
Section with a centered heading and a 3-column card grid. Each card has a yellow icon badge at the top, a bold title, and a light description text.

**Cards:** Future-proof · Tailored solutions · Transparency · Design That Converts · Partner · Results

---

### Services
Section with a centered heading and a 4-column card grid. Each card has a floating icon badge above the top edge, a title, description text, and a "Read more" link with an arrow that turns yellow on hover.

**Cards:** Mobile Development · Web Development · UX/UI Design · Consultancy

**Updates:**
- Each card should display relevant technology logos floating around its sides (e.g. the UX/UI card shows Figma and Framer logos floating beside it)

---

### Projects
Section with project cards displayed in a horizontal wrapping row. Each card shows an icon, a title, and a short description. Currently uses placeholder data.

**Updates:** Replace with real project data (image, name, description, tech used, link)

---

### Technologies *(placeholder)*
Section heading only: "**Technologies** we master"

---

### Process *(placeholder)*
Section heading only: "Our **creative** Process"

---

### Contact *(placeholder)*
Section heading only: "Get in touch"

---

### Flying Bee *(disabled)*
A bee image that travels across the full page following a curved path as the user scrolls. Fully built but currently turned off.

---

## Shape & Style

- Buttons and selectors: very rounded (pill shape)
- Cards: rounded corners, soft drop shadow, flat depth (no 3D elevation effect)
- Icon badges: small rounded square with yellow-tinted background
- Borders: 2px, mostly yellow at very low opacity
- Overall feel: flat, clean, dark, modern

