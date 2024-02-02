# Stablecoin Transaction Portal Backend

This project is the backend part of a simple application that allows users to view their stablecoin balance, transaction history, and simulate sending stablecoins to other addresses. It is built using NestJS, a progressive Node.js framework for building efficient, reliable, and scalable server-side applications.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (version 12 or later)
- npm (usually comes with Node.js)

### Installation

1. Clone the repository to your local machine:

- git clone <repository-url>
- cd <project-directory>

2. Install the necessary dependencies:

- npm install

Start the application:

- npm run start

This will start the server on http://localhost:3000.

### More

Project Structure

    main.ts: The entry point of the application. It initializes the NestJS application, sets up global filters, and enables CORS.
    app.module.ts: The root module of the application, organizing various controllers and services.
    /auth
        auth.guard.ts: Implements a simple static token-based authentication guard.
        config.ts: Contains configuration variables, including the static authentication token.
    /controllers
        balance.controller.ts: Handles requests related to fetching the current stablecoin balance.
        transactions.controller.ts: Handles requests for sending stablecoins and fetching transaction history.
    /services
        transactions.service.ts: Contains the business logic for managing transactions and balances.
    /db
        mock-db.ts: Simulates a database using an in-memory data structure for storing balances and transactions.

Design Choices and Assumptions

    Static Token Authentication: For simplicity, the application uses a static token for authentication. This token is checked in all secured endpoints against the one stored in config.ts.
    In-memory Database: To simplify setup and focus on the core functionality, the application uses a mock database implemented as an in-memory JavaScript object.

Usage

To interact with the API, you can use tools like Postman or cURL. Ensure to include the static token in the Authorization header as Bearer <your_static_token>.
Endpoints

    GET /balance: Fetches the current stablecoin balance.
    GET /transactions: Retrieves the transaction history.
    POST /transactions/send: Sends stablecoins to another address. Requires a JSON body with amount and recipient.

Error Handling

The application uses a global HttpExceptionFilter to catch and format exceptions thrown during API requests, ensuring consistent error responses.
