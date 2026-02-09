# Server

This folder contains the Express.js backend for the Memory Game project.

The backend is responsible for:

- Serving the frontend files
- Providing an API endpoint to retrieve card data
- Connecting to a SQLite database where the cards are stored

## Setup

From the `server` folder, run:

```bash
# Install dependencies
npm install

# Start the server
npm start
```

The server will run at http://localhost:3000

## API Endpoints

# GET /cards

Returns all available cards stored in the database.

Example response:

```
[
  {
    "id": 1,
    "name": "frog1",
    "image": "Images/frog1.png",
    "alt": "Smiling frog",
    "color": "#ee76f8"
  }
]
```

This endpoint is consumed by the frontend to dynamically generate the game cards.

## Project Structure

```
final project/
├── app/                # Frontend
|    |── Images/        # Card images and assets
|    │── index.html
|    │── styles.css
|    │── script.js
└── server/             # Backend
     ├── package.json   # Node/npm dependencies and scripts
     ├── index.js       # Express server and API routes
     ├── database.db    # SQLite database
     └── script-2.sql   # Database schema and seed data
```

## Notes

- Card data is no longer hardcoded in the frontend.
- Cards are stored in a SQLite database and fetched via an API.
- The frontend game logic remains unchanged and functions as before.
