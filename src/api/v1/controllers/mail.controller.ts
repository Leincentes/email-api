import { Request, Response } from "express";
import { handleError } from "../helpers/helper";
import { Email } from "../interfaces/email.interface";
import { EmailService } from "../services";


export const createEmailController = async (req: Request, res: Response): Promise<void> => {
    try {
        const emailData: Email = req.body;
        const newUserData = await EmailService.createEmail(emailData);
        
        res.status(201).json({
            status: 'success',
            message: 'Email successfully created',
            data: newUserData,
        })
    } catch (error: any) {
        const errorMessage: any = handleError(error.message, 500);
        res.status(errorMessage.statusCode).json({
            status: 'error',
            message: errorMessage.message,
        });
    }
}

export const getAllEmailsController = async (req: Request, res: Response): Promise<void> => {
    try {
        const emails = await EmailService.getAllEmail();
        res.status(200).json({
            status: 'success',
            message: 'All emails fetch successfully',
            data: emails,
        })

    } catch (error: any) {
        const errorMessage: any = handleError(error.message, 500);
        res.status(errorMessage.statusCode).json({
            status: 'error',
            message: errorMessage.message,
        });
    }
}

export const getEmailByIdController = async (req: Request, res: Response): Promise<void> => {
    try {
        const emailId: string = req.params.id;
        const email = await EmailService.getAllEmailById(emailId);

        res.status(200).json({
            status: 'success',
            message: 'Successfully get the email',
            data: email,
        });
    } catch (error: any) {
        const errorMessage: any = handleError(error.message, 500);
        res.status(errorMessage.statusCode).json({
            status: 'error',
            message: errorMessage.message,
        });
    }
}

export const updateEmailController = async (req: Request, res: Response): Promise<void> => {
    try {
        const emailId: string = req.params.id;
        const updatedData: Email = req.body;
        const email = await EmailService.updateEmailById(emailId, updatedData);

        res.status(200).json({
            status: 'success',
            message: 'Successfully updated the email',
            data: email,
        });
    } catch (error: any) {
        const errorMessage: any = handleError(error.message, 500);
        res.status(errorMessage.statusCode).json({
            status: 'error',
            message: errorMessage.message,
        });
    }
}

export const deleteEmailController = async (req: Request, res: Response): Promise<void> => {
    try {
        const emailId: string = req.params.id;
        const email = await EmailService.deleteEmailById(emailId);

        res.status(200).json({
            status: 'success',
            message: 'Successfully deleted the email',
            data: email,
        });
    } catch (error: any) {
        const errorMessage: any = handleError(error.message, 500);
        res.status(errorMessage.statusCode).json({
            status: 'error',
            message: errorMessage.message,
        });
    }
}