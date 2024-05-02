# Mail API

This project is an API for managing emails.

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/Leincentes/email-api.git
    cd mail-api
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Start the server:**

    ```bash
    npm run dev
    ```

    The server will be running at [http://localhost:3000](http://localhost:3000).

## API Documentation

You can access the API documentation using Swagger UI at [http://localhost:3000/api/v1/docs](http://localhost:3000/api/v1/docs).

### Endpoints

- **GET /emails:** Get all emails
- **POST /emails:** Send an email
- **GET /emails/{emailId}:** Get an email by ID
- **PUT /emails/{emailId}:** Update an email by ID
- **DELETE /emails/{emailId}:** Delete an email by ID

## Dependencies

- **express:** Fast, unopinionated, minimalist web framework for Node.js
- **swagger-ui-express:** Swagger UI middleware for Express
- **YAML:** YAML parser and serializer for Node.js
- **nodemon:** Monitor for any changes in your Node.js application and automatically restart the server

## Contributing

Contributions are welcome! Please follow the [Contribution Guidelines](CONTRIBUTING.md).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
