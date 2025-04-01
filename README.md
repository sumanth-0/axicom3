# Startup Hub

A MERN stack application for connecting startups, investors, and talent. This platform provides a comprehensive ecosystem for the startup community.

## Features

- User Authentication (Startup founders, Investors, Talent)
- Startup Profiles and Listings
- Investment Opportunities
- Job Board
- Messaging System
- Resource Hub
- Dashboard Analytics

## Tech Stack

- MongoDB: Database
- Express.js: Backend framework
- React.js: Frontend framework
- Node.js: Runtime environment
- JWT: Authentication
- Bootstrap/Material-UI: Styling

## Prerequisites

- Node.js (v14+ recommended)
- MongoDB (local or Atlas URI)
- npm or yarn package manager

## Installation

1. Clone the repository
```bash
git clone <repository-url>
cd startup-hub
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
Create a .env file in the root directory and add:
```
NODE_ENV=development
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

4. Run the application
```bash
# Run both frontend and backend
npm run dev

# Run backend only
npm run server

# Run frontend only
npm run client
```

## Project Structure

```
startup-hub/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── server.js
├── frontend/
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── services/
│       └── App.js
├── .env
├── .gitignore
└── package.json
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License. 