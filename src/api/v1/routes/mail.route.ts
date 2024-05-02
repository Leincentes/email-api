import express from 'express';
import { EmailController } from '../controllers';

const emailRouter = express.Router();

emailRouter.post('/', EmailController.createEmailController);

emailRouter.get('/', EmailController.getAllEmailsController);

emailRouter.get('/:id', EmailController.getEmailByIdController);

emailRouter.put('/:id', EmailController.updateEmailController);

emailRouter.delete('/:id', EmailController.deleteEmailController)

export default emailRouter;