# Archiaa

Archiaa is an AI-powered architectural visualization web application that converts simple 2D floor plans into generated 3D-style interior layouts. The project explores how modern web technologies and AI services can be combined to build a functional SaaS-style application with minimal infrastructure setup.

Users can upload a floor plan image, generate a visualization using AI, compare the original layout with the generated result, and manage their projects through a simple interface.

This project was built as a learning exercise while studying how AI-powered applications are architected and deployed.

---

## Project Motivation

Understanding architectural floor plans can be difficult for people who are not trained in reading technical drawings. A flat 2D layout often does not clearly communicate how a space might look when furnished or organized.

Archia attempts to bridge this gap by generating visual interpretations of floor plans using AI. Instead of imagining how the space might look, users can generate a visual layout that helps them understand how the rooms and furniture might be arranged.

Beyond the concept itself, the project focuses on learning how modern AI-enabled SaaS products are built and structured.

---

## Core Features

* Upload floor plan images
* Generate AI-assisted interior visualizations
* Compare the original floor plan with the generated layout
* Save and manage multiple projects
* Export generated visualizations
* Store project data using serverless storage
* Basic authentication flow for managing personal projects
* Public and private project visibility support

---

## Technology Stack

### Frontend

React
React Router
Vite
Tailwind CSS

### Backend Infrastructure

Puter.js serverless workers
Key-value storage for project data
AI image generation services

### Development Tools

Lucide React for icons
AI-assisted code review and development tools
Modern React routing architecture

---

## Architecture Overview

The application is built using a lightweight architecture designed for simplicity and scalability.

Frontend Interface
Handles image uploads, project display, and visualization controls.

Serverless Worker Layer
Processes API requests such as saving projects, retrieving project history, and interacting with storage.

Storage Layer
Stores project metadata and generated assets using key-value storage and hosted files.

AI Rendering Layer
Receives the uploaded floor plan and generates a visual interpretation of the layout.

---

## Application Flow

1. The user uploads a floor plan image.
2. The frontend processes the image and sends it to the AI rendering service.
3. The AI model generates a visual representation of the interior layout.
4. The generated image is stored in serverless storage.
5. Project metadata is saved in the key-value database.
6. The user can access saved projects through the project gallery.
7. The application allows comparison between the original floor plan and the generated visualization.

---

## Project Structure

```
archiaa/
│
├── app/
│   ├── routes/
│   │   ├── home.tsx
│   │   └── visualizer.tsx
│   │
│   ├── root.tsx
│   └── app.css
│
├── components/
│   ├── Navbar.tsx
│   └── ui/
│       └── Button.tsx
│
├── lib/
│   ├── puter.actions.ts
│   └── puter.worker.js
│
└── package.json
```

---

## Running the Project Locally

Clone the repository

```
git clone https://github.com/yourusername/archiaa.git
cd archiaa
```

Install dependencies

```
npm install
```

Start the development server

```
npm run dev
```

The application will run locally at:

```
http://localhost:5173
```

---

## Improvements Beyond the Tutorial

While building this project, I focused on understanding how the system works and exploring the architecture behind it.

Some improvements and learning steps included:

* Renaming and adapting the project concept to Archia
* Studying the interaction between frontend components and serverless workers
* Understanding how project data is stored and retrieved using key-value storage
* Exploring how AI-generated images are processed and displayed
* Analyzing how routing and state management work within the application

---

## Screenshots

Home Page
Upload and manage floor plan projects.

AI Visualization
Generated architectural layout created from the uploaded floor plan.

Comparison View
Side-by-side comparison between the original plan and the generated design.

(Screenshots can be added in a `/screenshots` folder and referenced here.)

---

## What I Learned From This Project

Working on this project helped me understand:

* How AI services can be integrated into web applications
* How serverless backends simplify infrastructure management
* How modern React applications are structured
* How project data and media assets are stored and retrieved
* How SaaS-style applications manage users and generated content

---

## Acknowledgment

This project was built while following and studying a tutorial on creating an AI-powered SaaS application. The tutorial served as a guide for understanding the architecture and workflow, while the implementation was completed as part of my learning process.

---

## Author

Ginni Arora
Bachelor of Computer Applications (BCA) student

Interested in web development and AI-powered applications.
