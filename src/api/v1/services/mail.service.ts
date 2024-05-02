import { handleError, logError } from "../helpers/helper";
import { Email } from "../interfaces/email.interface";
import { EmailModel } from "../models/email.model";


export const createEmail = async (emailData: Partial<Email>): Promise<Email> => {
    try {
        const newEmail = await EmailModel.create(emailData);
        return newEmail;

    } catch (error: any) {
        logError(error.message);
        throw handleError('Failed to create email', 500);
    }
}

export const getAllEmail = async (): Promise<Email[]> => {
    try {
        const emails = await EmailModel.find();
        if (!emails) {
            throw new Error('Emails not found');
        }
        return emails;

    } catch (error: any) {
        logError(error.message);
        throw handleError('Failed to fetch email', 500);
    }
}

export const getAllEmailById = async (emailId: string): Promise<Email> => {
    try {
        const email = await EmailModel.findById(emailId);
        if (!email) {
            throw new Error('Email not found');
        }
        return email;

    } catch (error: any) {
        logError(error.message);
        throw handleError('Failed to fetch email', 500);
    }
}

export const updateEmailById = async (emailId: string, updateData: Partial<Email>): Promise<Email> => {
    try {
        const updatedEmail = await EmailModel.findByIdAndUpdate(emailId, updateData);
        if (!updatedEmail) {
            throw new Error('User not found');
        }
        return updatedEmail;
    } catch (error: any) {
        logError(error.message);
        throw handleError('Failed to update email', 500);
    }
}

export const deleteEmailById = async (emailId: string): Promise<Email> => {
    try {
        const deletedEmail = await EmailModel.findByIdAndDelete(emailId);
        if (!deletedEmail) {
            throw Error('User not found');
        }
        return deletedEmail;
    } catch (error: any) {
        logError(error.message);
        throw handleError('Failed to delete user', 500);
    }
}