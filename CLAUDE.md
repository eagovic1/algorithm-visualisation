# Algorithm Visualisation

## Project Overview

A full-stack web application for visualizing and comparing algorithms. Built with a React/TypeScript frontend and Express/Node.js backend with MySQL database.

## Tech Stack

### Frontend
- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **UI Library**: React Bootstrap 5, Bootstrap 5
- **Routing**: React Router v6
- **Animations**: React Spring
- **Icons**: FontAwesome
- **Code Highlighting**: react-syntax-highlighter
- **Charts**: react-vis

### Backend
- **Runtime**: Node.js + Express.js
- **Database**: MySQL with Sequelize ORM
- **Session Management**: express-session
- **CORS**: cors
- **Environment**: dotenv

## Project Structure

```
algorithm-visualisation/
├── backend/
│   ├── config/db.js          # Sequelize database configuration
│   ├── controllers/          # Business logic
│   │   ├── algorithmController.js
│   │   ├── algorithmCategoryController.js
│   │   ├── analysisController.js
│   │   ├── sortingController.js
│   │   └── userController.js
│   ├── models/               # Sequelize models
│   │   ├── Algorithm.js
│   │   ├── AlgorithmCategory.js
│   │   ├── FavoriteAlgorithm.js
│   │   ├── Logs.js
│   │   └── User.js
│   ├── routes/               # API route definitions
│   │   ├── algorithmRoutes.js
│   │   ├── analysisRoutes.js
│   │   ├── sortingRoutes.js
│   │   ├── userRoutes.js
│   │   └── api.js
│   ├── utils/
│   │   ├── helpers.js
│   │   └── validation.js
│   ├── index.js              # Main entry point
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/       # Reusable components
│   │   │   ├── AlgorithmCode/
│   │   │   ├── ArrayElement/
│   │   │   ├── ArrayInput/
│   │   │   ├── FavoriteAlgorithms/
│   │   │   ├── Header/
│   │   │   ├── ProtectedRoute/
│   │   │   ├── RecentAlgorithms/
│   │   │   ├── Snackbar/
│   │   │   ├── SortingArray/
│   │   │   └── StepControl/
│   │   ├── pages/            # Page components
│   │   │   ├── HomePage/
│   │   │   ├── LoginPage/
│   │   │   ├── RegisterPage/
│   │   │   ├── SortingInputPage/
│   │   │   ├── SortingVisualisationPage/
│   │   │   ├── ComparisonHomePage/
│   │   │   ├── ComparisonResultPage/
│   │   │   ├── VisualisationHomePage/
│   │   │   ├── AdminPanelUsers/
│   │   │   ├── AdminPanelCategories/
│   │   │   └── AdminPanelAlgorithms/
│   │   ├── context/          # React Context
│   │   │   └── AuthContext.tsx
│   │   ├── constants.js      # App constants
│   │   ├── App.tsx           # Main app with routing
│   │   └── main.tsx          # Entry point
│   ├── index.html
│   └── package.json
```

## Running the Application

### Backend
```bash
cd backend
npm install
node index.js
```
- Backend runs on port 3000 by default (or PORT env var)
- Requires MySQL database connection configured in `.env`

### Frontend
```bash
cd frontend
npm install
npm run dev      # Development server (Vite)
npm run build    # Production build
npm run preview  # Preview production build
```
- Frontend dev server runs on port 5173
- CORS is configured to allow requests from http://localhost:5173

## Key Features

### Algorithm Visualization
- Step-by-step sorting algorithm visualization
- Interactive array input and manipulation
- Animation for swapping elements

### Algorithm Comparison
- Compare two algorithms side-by-side
- View worst/average/best case time complexity
- Analysis and performance results

### Authentication
- User login/register with session management
- Protected routes for admin panels
- Role-based access control

### Admin Panel
- User management
- Algorithm categories management
- Algorithm CRUD operations

### User Features
- Favorite algorithms
- Recent algorithms tracking
- Code display with syntax highlighting

## Database Models

- **User**: User accounts with role (admin/user)
- **Algorithm**: Algorithm definitions with name, code, complexity, key
- **AlgorithmCategory**: Categories for organizing algorithms
- **FavoriteAlgorithm**: User's favorited algorithms
- **Logs**: System logs

## API Routes

All routes are prefixed with `/api`:
- `/algorithm` - Algorithm CRUD operations
- `/category` - Algorithm category management
- `/analysis` - Algorithm analysis and comparison
- `/sorting` - Sorting algorithm endpoints
- `/user` - User authentication and management
