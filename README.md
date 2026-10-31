# React & Tailwind CSS Reusable Modal

Companion repository for the Dev.to article: [How to Build a Reusable
Modal Component in React with Tailwind
CSS](https://dev.to/ekosarya/how-to-build-a-reusable-modal-component-in-react-with-tailwind-css-3a27)

A lightweight, accessible, and highly reusable Modal component built
from scratch using React, Tailwind CSS v4, and Vite. Perfect for
projects where you want to avoid overengineering and keep external
dependencies minimal.

## Features

- 🪶 **Zero External Modal Libraries:** Built completely from scratch
  using standard React hooks and Tailwind CSS.
- ⚓ **Custom `useModal` Hook:** Clean and modular state management
  that allows you to handle multiple independent modals on a single
  page without state collisions.
- ♿ **Accessibility (A11y) Ready:** Built-in support for keyboard
  navigation (`ESC` key dismissal), backdrop clicks, proper ARIA
  attributes (`role="dialog"`, `aria-modal`), and background scroll
  locking.
- 💡 **Real-World Examples:** Includes three distinct demo scenarios:
  - Info / Maintenance Notice Modal
  - Delete Account Confirmation Modal
  - Edit Profile Form Modal

## Tech Stack

- **React:** v19.x
- **Vite:** v8.x
- **Tailwind CSS:** v4.3.x (via `@tailwindcss/vite` plugin)

## Project Structure

```text
src
├── App.jsx
├── assets
│   ├── confirmationModal.jpg
│   ├── editProfileModal.jpg
│   ├── hero.png
│   ├── infoModal.jpg
│   ├── modalTriggers.jpg
│   ├── react.svg
│   └── vite.svg
├── components
│   ├── common
│   │   └── Modal.jsx
│   └── modals
│       ├── DeleteModal.jsx
│       ├── EditProfileModal.jsx
│       └── InfoModal.jsx
├── hooks
│   └── useModal.js
├── index.css
└── main.jsx
```

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### 1. Clone the Repository

```bash
git clone https://github.com/ekosarya/tailwind-react-reusable-modal.git
cd tailwind-react-reusable-modal
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173` (or the URL
shown in your terminal).
