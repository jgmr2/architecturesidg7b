# UrbanAlert API

## Description
UrbanAlert is a project created to help citizens report urban issues in their communities, such as potholes, broken streetlights, or trash problems[cite: 12, 17]. The goal is to provide a clear channel to report these situations and help improve the city.

## Technologies Used
This project was built using the following stack:
* Node.js
* Express
* MongoDB
* JWT (JSON Web Tokens)
* Docker and Docker Compose

## Repository Structure
The code follows the N-Layer architectural pattern to ensure a clean separation of concerns[cite: 8]:
* src/routes: Entry points for the API.
* src/controllers: Business logic.
* src/models: Database schemas.
* src/middlewares: Security and authentication logic.
* src/config: Database connection and settings.

## Installation Guide
To get the project running in less than 2 minutes, follow these steps[cite: 11, 13]:

1. Clone the repository:
   git clone https://github.com/jgmr2/architecturesidg7b.git

2. Configure environment variables:
   Create a .env file in the root folder. You can use the .env.template file as a reference to see which variables are needed (PORT, MONGO_URI, JWT_SECRET)

3. Run the project with Docker:
   Make sure you have Docker installed and run:
   docker-compose up --build

The API will be available at http://localhost:3000.

## Main Endpoints
These are the primary routes available in the system:

### Authentication (Auth)
* POST /api/auth/registrar - Register a new user account.
* POST /api/auth/login - Log in and receive a JWT token.

### Reports (JWT Protected)
* POST /api/reportes/ - Create a new urban report (Requires a valid token).
* GET /api/reportes/ - Get a list of all existing reports (Requires a valid token).

---


## Testing
You can verify that the system is working correctly by using the provided bash script, which automates user registration, login, and report creation while verifying data persistence in MongoDB:

1. Make the script executable:
   `chmod +x test.sh`
2. Run the tests:
   `./test.sh`

Project developed for the Software Architecture course at UTR.