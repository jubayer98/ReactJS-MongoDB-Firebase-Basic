# Visa Navigator

[Live Demo](https://b10a10-83ee8.web.app/)

## Overview

Visa Navigator simplifies the process of checking visa requirements, applying online, and tracking applications. Designed with user-friendliness and seamless navigation, the platform ensures an efficient visa application experience.

## Features

### Client Side
- **Dynamic Interface**: A responsive, user-friendly interface optimized for mobile, tablet, and desktop views.
- **Authentication**: Secure login and registration functionality with email and Google authentication.
- **Visa Management**:
  - Add, update, and delete visa information.
  - Filter and search functionalities for enhanced user experience.
- **Private Routes**: Protected access to sensitive features like "My Added Visas" and "My Visa Applications."
- **Extra Features**:
  - Dark/Light theme toggle for personalization.
  - Animations using libraries like Lottie React and React Tooltip.
- **Error Handling**: Toast notifications for errors and success messages.

### Server Side
- **API Features**:
  - CRUD operations for visa management.
  - Secure data storage using MongoDB.
  - Optimized endpoints for efficient data retrieval.
- **Authentication**:
  - Token-based authentication for user-specific data.
- **Data Protection**: Secure handling of Firebase and MongoDB credentials using environment variables.

## Installation

### Client Side
1. Clone the repository:
   ```bash
   git clone https://github.com/programming-hero-web-course2/b10-a10-client-side-jubayer98.git
   ```
2. Navigate to the project directory:
   ```bash
   cd client-side
   ```
3. Install dependencies
4. Start the development server


### Server Side
1. Clone the repository:
   ```bash
   git clone https://github.com/programming-hero-web-course2/b10-a10-server-side-jubayer98.git
2. Navigate to the project directory:
   ```bash
   cd server-side
   ```
3. Install dependencies
4. Set up environment variables:
   - Create a `.env` file and add your MongoDB credentials.
5. Start the server

## Technologies Used

### Client Side
- React
- Firebase Authentication
- React Router
- Tailwind CSS
- DaisyUI
- Lottie React
- MongoDB (via API)
- Sweet Alert

### Server Side
- Node.js
- Express.js
- MongoDB (Atlas)

## Usage Instructions
1. Register or log in to the application.
2. Browse the latest visas on the homepage or use the search feature.
3. Add, update, or delete visa details in the "My Added Visas" section.
4. Apply for visas directly from the "Visa Details" page.
5. Track your applications under the "My Visa Applications" section.

## Deployment
- **Client Side**: Deployed on Firebase
- **Server Side**: Deployed on Vercel

## Contribution
Contributions are welcome! Please fork the repository and submit a pull request.
