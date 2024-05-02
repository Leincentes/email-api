export interface Email {
    id: string; 
    sender: EmailAddress; 
    recipient: EmailAddress; 
    subject: string;
    body: string;
    sentAt: Date; 
}

export type EmailAddress = string;