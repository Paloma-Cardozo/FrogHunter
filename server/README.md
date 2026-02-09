# Frog Hunter – Backend API

This folder contains the backend implementation for the Frog Hunter memory game.

## Overview

- Node.js + Express server
- SQLite database for storing card data
- REST API used by the frontend to fetch cards

## Available Endpoints

### GET /cards

Returns all available cards in JSON format.

- Status: 200 OK
- Response: Array of card objects (id, name, image, alt, color)

Example response:

```json
[
  {
    "id": 1,
    "name": "frog1",
    "image": "Images/frog1.png",
    "alt": "Frog smiling",
    "color": "#43bef7"
  }
]
```

## API Testing

The API was manually tested using Postman.

- Valid endpoints return 200 OK
- Invalid endpoints return 404 Not Found

The Postman collection used for testing is included in this folder.

## How to run

```bash
npm install
npm start
```

The server runs on:

```
http://localhost:3000
```

## Project Structure

```
final project/
├── app/                                      # Frontend
| |── Images/                                 # Card images and assets
| │── index.html
| │── styles.css
| │── script.js
└── server/                                   # Backend
├── README.md                                 # Backend documentation
├── package.json                              # Node/npm dependencies and scripts
├── package-lock.json                         # Locked dependency versions
├── index.js                                  # Express server and API routes
├── database.db                               # SQLite database
├── script-2.sql                              # Database schema and seed data
└── frog-hunter-api.postman_collection.json
```

## Notes

- Card data is no longer hardcoded in the frontend.
- Cards are stored in a SQLite database and fetched via an API.
- The frontend game logic remains unchanged and functions as before.
