import mongoose, { Schema } from "mongoose";
import { Email } from "../interfaces/email.interface";

const EmailSchema = new Schema({
    id: { type: String, required: true},
    sender: { type: String, required: true },
    recipient: { type: String, required: true },
    subject: { type: String },
    body: { type: String },
    sentAt: { type: Date },
});

export const EmailModel = mongoose.model<Email>('Email', EmailSchema);