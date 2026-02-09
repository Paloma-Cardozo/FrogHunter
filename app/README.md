# 🐸 Frog Hunter – Memory Game

Frog Hunter is a browser-based memory game developed as part of the **Foundation Project at Hack Your Future**.

The game is inspired by the classic Memory Game, where players find all matching pairs of cards by flipping them two at a time. The focus of this project is to create a smooth, intuitive, and enjoyable gameplay experience, while demonstrating incremental development and frontend-backend integration.

---

## 🎮 About the Game

Players interact with a grid of frog-themed cards. Key mechanics:

- Cards start face down
- Players can reveal two cards at a time
- If the cards match, they remain revealed
- If they do not match, they flip back after a short delay
- The game ends when all matching pairs are found
- A timer starts when the first card is revealed
- A counter tracks how many cards have been revealed

The game logic and interactions are designed to be clear, responsive, and easy to understand on both desktop and mobile devices.

---

## 🛠️ Technologies & Approach

The game is built with:

- **HTML** - structure of the game board and interface
- **CSS** - layout, animations, and responsive design
- **JavaScript** - game logic, card flipping, and state handling
- **Express.js & SQLite** – backend API for storing and retrieving card data
- **Git & GitHub** - version control and collaboration

# Development Approach

- The project follows a sprint-based incremental approach.
- Initially, cards were hardcoded in the frontend.
- Later, the game was refactored to fetch cards from a backend API connected to a SQLite database.
- Game state (matched cards, flipped cards, timer) is managed entirely in JavaScript, keeping the backend simple and focused on data retrieval.

---

## 📂 Project Structure

/Final Project
├── app/
│ ├── Images/ # Card images
│ ├── index.html # Game structure
│ ├── styles.css # Styles and animations
│ └── script.js # Game logic, fetches data from backend
└── server/
├── index.js # Express server
├── database.db # SQLite database with card data
├── package.json # Dependencies and scripts
└── script-2.sql # SQL script to create and populate cards table

The structure is intentionally simple, emphasizing core concepts such as DOM manipulation, state management, and API integration.

---

## Notes

- Card images and metadata are served from the backend for better scalability.
- Game logic is decoupled from data, so new cards can be added without modifying JS code.
- The frontend is responsive; the grid and cards scale with screen size, although some buttons may need minor tweaks for smaller screens.

---

## 👩🏻‍💻👩🏼‍💻 Team

This project is developed as a pair-programming exercise, emphasizing collaboration, communication, and shared ownership:

- **Paloma Cardozo**
- **Iryna Lopatina**
