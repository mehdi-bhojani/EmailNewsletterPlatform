'use server'

import { connectToAstraDb } from "@/app/shared/libs/db";
import Email from "@/models/email.mode";



export const getEmails = async ({newsLetterOwnerId}:{newsLetterOwnerId: string}) => {
    try {
        connectToAstraDb();
        const emails = Email.find({newsLetterOwnerId});
        return emails;
    } catch (error) {
        console.error("Error getting emails: ", error);
    }
}