# 🚀 AstroTimes (v0.1)

An interactive web platform designed to make astronomy accessible and engaging. AstroTimes brings complex space concepts to life through real-time 3D simulations and an interactive "what-if" engine.

**[Link to Live Demo Here]** ![AstroTimes Screenshot](public/placeholder.png) 
---

## ✨ Features (v0.1 - The Interactive Lab)

This initial version is focused on interactive education and simulation.

### 1. Astro-pedia
* A browseable, card-based library of celestial bodies.
* Uses `react-router-dom` to create dynamic detail pages for each planet.
* Data is managed via a clean JSON data source.

### 2. 3D Eclipse Simulator
* A real-time, 3D simulation of the Sun-Earth-Moon system built with `React Three Fiber`.
* Demonstrates accurate (scaled) orbital mechanics using the `useFrame` hook for animation.
* Features a dynamic `pointLight` (the Sun) that casts realistic shadows, allowing the Moon to cast a visible shadow on the Earth.

### 3. "What If" Scenario Engine
* An interactive simulation where users can alter physics.
* **"What if the Sun disappeared?"**:
    * Users can click a button to remove the Sun's gravity.
    * The simulation dynamically switches from an orbital path to a tangential (straight-line) trajectory, demonstrating Newton's first law.
    * The scene's lighting changes, and a "Reset" button cleanly re-initializes the simulation state.

---

## 🛠️ Tech Stack

* **Frontend:** React (with Vite)
* **3D Rendering:** Three.js & `@react-three/fiber`
* **3D Helpers/Controls:** `@react-three/drei`
* **Routing:** `react-router-dom`
* **Styling:** Plain CSS

---

## 🏃‍♂️ How to Run Locally

1.  **Clone this repository:**
    ```bash
    git clone [Your-GitHub-Repo-URL]
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd astro-times
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```
4.  **Run the development server:**
    ```bash
    npm run dev
    ```
5.  Open `http://localhost:5173` in your browser.

---

## 🗺️ Future Roadmap

This project is in active development. Future modules will include:

* **P1: "SkyTrack"**: Real-time tracking of the ISS, satellites, and planets.
* **P2: "AstroTimes Feed"**: An aggregated feed of upcoming rocket launches, celestial events, and astronomy news.