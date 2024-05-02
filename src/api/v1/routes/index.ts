import express from 'express';
import emailRouter from './mail.route';
const router = express.Router();

router.use('/emails', emailRouter);

export default router;