import express, { Application, Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import connectDB from './config/db.config';
import router from './api/v1/routes';
import swaggerDocs from './api/docs/v1/swagger';

// Load environment variables from .env file
dotenv.config();

connectDB();

// Create Express app
const app: Application = express();
app.use(express.static('public'));

// Middleware
app.use(cors({
    credentials: true,
}));

app.use(bodyParser.json()); // Parse JSON request bodies
app.use(compression());
app.use(cookieParser());
app.use(helmet()); // Secure HTTP headers
app.use(morgan('dev')); // HTTP request logger

// routes handler
app.use('/api/v1', router);

// Start the server
const PORT = process.env.PORT || 3000;
const baseURL = process.env.BASE_URL || `http://localhost:${PORT}`;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    swaggerDocs(app, PORT, baseURL, { title: 'Email API', version: '1.0.0' });
});

export default app;